/**
 * # Auth API
 * @description API passport authentication
 * @author Michael McVeigh
 */

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const User = require('../models/User');
const errors = require('../middleware/errors');
const { getUser, setSsoCookie, setSsoRefreshCookie, clearAccessCookie, clearRefreshCookie } = require('../middleware/utils/request');
const userController = require('../controllers/UserController');

const jwt = require('jsonwebtoken');

const { extractBearerToken } = require('../middleware/mt-auth');

const { isValidMongoId, areObjectIdsEqual } = require('../middleware/utils/helpers');

const Room = require('../models/Room');

const ssoService = require('../services/sso');

router.post('/login', async (req, res, next) => {
  try {
    let { message, accessToken, refreshToken } = await ssoService.login(req.body);
    if (message) {
      return errors.sendError.InvalidCredentialsError(message, res);
    }

    let verifiedToken = await jwt.verify(
      accessToken,
      process.env.MT_USER_JWT_SECRET
    );
    let vmtUser = await User.findById(verifiedToken.vmtUserId)
      .populate({
        path: 'courses',
        populate: { path: 'members.user', select: 'username' },
      })
      .populate({
        path: 'rooms',
        select: '-currentState',
        populate: { path: 'tabs members.user', select: 'username tabType' },
      })
      .populate({
        path: 'activities',
        populate: { path: 'tabs' },
      })
      .populate({ path: 'notifications', populate: { path: 'fromUser' } })
      .lean()
      .exec();

    setSsoCookie(res, accessToken);
    setSsoRefreshCookie(res, refreshToken);

    let data = vmtUser;
    return res.json(data);
  } catch (err) {
    return errors.sendError.InternalError(null, res);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    let { message, accessToken, refreshToken } = await ssoService.signup(req.body);

    if (message) {
      return errors.sendError.InvalidCredentialsError(message, res);
    }

    let verifiedToken = await jwt.verify(
      accessToken,
      process.env.MT_USER_JWT_SECRET
    );

    setSsoCookie(res, accessToken);
    setSsoRefreshCookie(res, refreshToken);

    let user = await User.findById(verifiedToken.vmtUserId)
      .lean()
      .exec();

    return res.json(user);
  } catch (err) {
    return errors.sendError.InternalError(null, res);
  }
});

/** Authentication for Encompass users who want to import rooms into the Encompass account **/
router.post('/enc', (req, res, next) => {
  let { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.json({ errorMessage: 'Incorrect username' });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return res.json({ errorMessage: 'Incorrect password' });
      } else {
        let userSummary = {};
        userSummary.username = user.username;
        userSummary._id = user._id;
        crypto.randomBytes(20, (err, buff) => {
          if (err) return errors.sendError.InternalError(err, res);
          userSummary.token = buff.toString('hex');
          user.token = userSummary.token;
          user.tokenExpiryDate = Date.now() + 3600000; // 1 Day
          user.save();
          return res.json({ user: userSummary });
        });
      }
    })
    .catch(err => {
      console.log('ERROR ', err);
      return errors.sendError.InternalError(err, res);
    });
});

router.post('/logout/:userId', (req, res, next) => {
  User.findByIdAndUpdate(req.params.userId, { socketId: null })
    .lean()
    .then(() => {
      try {
        clearAccessCookie(res);
        clearRefreshCookie(res);

        res.json({ result: 'success' });
      } catch (err) {
        console.log(('logout err', err));
        return errors.sendError.InternalError(err, res);
      }
    })
    .catch(err => errors.sendError.InternalError(err, res));
});


router.get('/currentUser', (req, res, next) => {
  let currentUser = getUser(req);

  if (currentUser === null) {
    return res.json({ user: null });
  }
  return userController
    .getById(currentUser._id)
    .then(result => {
      res.json({ result });
    })
    .catch(err => errors.sendError.InternalError(err, res));
});

router.post('/newMtUser', async (req, res, next) => {
  try {
    let authToken = extractBearerToken(req);

    let verifiedToken = await jwt.verify(
      authToken,
      process.env.MT_USER_JWT_SECRET
    );
    let wasFromTempUser =
      Array.isArray(req.body.rooms) && isValidMongoId(req.body.rooms[0]);
    if (wasFromTempUser) {
      let [updatedRoom, updatedUser] = await Promise.all([
        Room.findByIdAndUpdate(req.body.rooms[0], {
          tempRoom: false,
          members: [{ user: req.body._id, role: 'facilitator' }],
        }),
        User.findByIdAndUpdate(req.body._id, req.body, {
          new: true,
        }),
      ]);
      return res.json(updatedUser);
    }

    let newUser = await User.create(req.body);

    return res.json(newUser);
  } catch (err) {
    // invalid token
    return errors.sendError.InvalidCredentialsError(
      'Unauthorized request',
      res
    );
  }
});

router.post('/forgotPassword', async (req, res, next) => {
  try {
    let results = await ssoService.forgotPassword(req.body);
    return res.json(results);
  }catch(err) {
    console.error(`Error auth/forgot: ${err}`);
    console.trace();
    errors.handleError(err, res);
  }
});

router.get('/resetPassword/validate/:token', async (req, res, next) => {
  try {
    let results = await ssoService.validateResetPasswordToken(req.params.token);
    return res.json(results);

  }catch(err) {
    errors.handleError(err, res);
  }
});

router.post('/resetPassword/:token', async (req, res, next) => {
  try {
    let { user, accessToken, refreshToken, message } = await ssoService.resetPassword(req.body, req.params.token);

    if (message) {
      res.json(message);
      return;
    }
    // await jwt.verify(accessToken, process.env.MT_USER_JWT_SECRET);

    setSsoCookie(res, accessToken);
    setSsoRefreshCookie(res, refreshToken );

    return res.json(user);
  }catch(err) {
    console.error(`Error resetPassword: ${err}`);
    console.trace();
    errors.handleError(err, res);
  }
});

router.post('/resetPassword/user', async (req, res, next) => {
  try {
    const reqUser = getUser(req);
    if (!reqUser) {
      return errors.sendError.InvalidCredentialsError(null, res);
    }
    // need to be admin or be teacher and resetting one of your students
    //TODO: update this to only let you reset one of your student's passwords
    let isSelf = areObjectIdsEqual(reqUser._id, req.body.id);

    const hasPermission = reqUser.isAdmin || isSelf;

    if (!hasPermission) {
      return errors.sendError.NotAuthorizedError('You are not authorized.', res);
    }

    let results = await ssoService.resetPasswordById(req.body, reqUser);
    return res.json(results);

    }catch(err) {
      errors.handleError(err, res);
    }
});

router.get('/confirmEmail/:token', async(req, res, next) => {
  try {
    let results = await ssoService.confirmEmail(req.params.token);

    return res.json(results);
}catch(err) {
  console.log('err conf em: ', err.message);
  errors.handleError(err, res);
}
});

router.get('/confirmEmail/resend', async(req, res, next) => {
  try {
    let reqUser = userAuth.getUser(req);

    if (!reqUser) {
      return errors.sendError.InvalidCredentialsError(null, res);
    }

    let results = await ssoService.resendConfirmEmail(reqUser);
    return res.json(results);

  }catch(err) {
    console.log('err resend conf: ', err.message);
    errors.handleError(err, res);
  }
});

module.exports = router;
