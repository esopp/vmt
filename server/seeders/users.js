//
const { ObjectId, ISODate } = require('./utils');

module.exports = [
  /* 1 */
  {
    _id: ObjectId('5ba289ba7223b9429888b9b4'),
    courseTemplates: [],
    courses: [
      ObjectId('5bbf4e5ec1b6d84cb0a4ded8'),
      ObjectId('5bbb82f72539b95500cf526e'),
      ObjectId('5bbb82f72539b95500cf526a'),
      ObjectId('5bbf4e5ec1b6d84cb0a4ded3'),
    ],
    rooms: [
      ObjectId('5ba289c57223b9429888b9b5'),
      ObjectId('5ba289c57223b9429888b9b6'),
      ObjectId('5ba289c57223b9429888b9b7'),
      ObjectId('5ba289c57223b9429888b9b3'),
    ],
    activities: [
      ObjectId('5bd1da254b2d4b2a6c45def7'),
      ObjectId('5be1f0c83efa5f308cefb4c0'),
    ],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
    isTrashed: false,
    username: 'jl_picard',
    email: 'vmtmath@gmail.com',
    firstName: 'jean-luc',
    lastName: 'picard',
    password: '$2b$12$xI0a6mVLlVoFYeVsmU2XrOVowVVphu9ORSD9EVHG6lzWMvfP8cgES',
    accountType: 'facilitator',
    __v: 0,
    createdAt: ISODate('2019-06-21T17:08:26.423Z'),
    updatedAt: ISODate('2019-06-21T17:08:26.667Z'),
    ssoId: ObjectId('5d1a59d79c78ad48c0480c8c'),
    isEmailConfirmed: true,
  },

  /* 2 */
  {
    _id: ObjectId('5be1eba75854270cd0920faa'),
    courseTemplates: [],
    courses: [
      ObjectId('5c2e58db684f328cbca1d995'),
      ObjectId('5c2e58db684f328cbca1d999'),
    ],
    rooms: [
      ObjectId('5c2e58e4684f328cbca1d997'),
      ObjectId('5c2e58e4684f328cbca1d99f'),
      ObjectId('5c2e58e4684f328cbca1d99e'),
    ],
    activities: [
      ObjectId('5c2e58e9684f328cbca1d99b'),
      ObjectId('5c2e58e9684f328cbca1d99c'),
      ObjectId('5c2e58e9684f328cbca1d99a'),
    ],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
    isTrashed: false,
    username: 'd_troi',
    email: 'worf@example.com',
    firstName: 'Deanna',
    lastName: 'Troi',
    password: '$2b$12$PltCtaDCtpD.WakNZ8GUmOfX7kcisuA.PbGLM6HKGAdrkhuIQMzAy',
    accountType: 'facilitator',
    createdAt: ISODate('2019-06-21T17:08:26.424Z'),
    updatedAt: ISODate('2019-06-21T17:08:26.667Z'),
    __v: 0,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c8e'),
    isEmailConfirmed: true,
  },

  /* 3 */
  {
    _id: ObjectId('5be1eba75854270cd0920fa9'),
    courseTemplates: [],
    courses: [ObjectId('5bbf4e5ec1b6d84cb0a4ded8')],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
    isTrashed: false,
    username: 'worf',
    email: 'worf@example.com',
    firstName: 'worf',
    lastName: 'son of Mogh',
    password: '$2b$12$jNGkh.0hKAN1BRPUjScjCOE17yO9SkOV6rLdIO6DhAMsHQM28nfJi',
    accountType: 'facilitator',
    createdAt: ISODate('2019-06-21T17:08:26.424Z'),
    updatedAt: ISODate('2019-06-21T17:08:26.424Z'),
    __v: 0,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c8d'),
    isEmailConfirmed: true,
  },

  /* 4 */
  {
    _id: ObjectId('5be1eba75854270cd0920fb8'),
    courseTemplates: [],
    courses: [ObjectId('5bbf4e5ec1b6d84cb0a4ded8')],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
    isTrashed: false,
    username: 'data',
    email: 'data@example.com',
    firstName: 'NFN/NMI',
    lastName: 'data',
    password: '$2b$12$Kzr5WEtkOzsCG9LS5fd8G.HVjUk4xp3p/wdzDNB/B5CEWB.oBKEji',
    accountType: 'participant',
    createdAt: ISODate('2019-06-21T17:08:26.424Z'),
    updatedAt: ISODate('2019-06-21T17:08:26.424Z'),
    __v: 0,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c8f'),
    isEmailConfirmed: true,
  },

  /* 5 */
  {
    _id: ObjectId('5c531f091748c7196496a556'),
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
    isTrashed: false,
    username: 'bcrush',
    email: 'bcrush@gmail.com',
    firstName: 'Beverly',
    lastName: 'Crusher',
    password: '$2b$12$Ptcu.r3bhFyE/mrtxAbqO.jGVm7MsoNQLv5XmSC/hXSt.oWPHdXha',
    accountType: 'participant',
    createdAt: ISODate('2019-06-21T17:08:26.424Z'),
    updatedAt: ISODate('2019-06-21T17:08:26.424Z'),
    __v: 0,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c90'),
    isEmailConfirmed: true,
  },

  /* 6 */
  {
    _id: ObjectId('5ba289ba7223b9429888b9ee'),
    courseTemplates: [],
    courses: [],
    rooms: [ObjectId('5c2e58e4684f328cbca1dace')],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: true,
    seenTour: false,
    isTrashed: false,
    username: 'q',
    email: '',
    firstName: 'Q',
    lastName: '',
    password: '$2b$12$GMfHvZySEkCTfV0UwRg3EeLFW6ZnonV6UnM7YIhqnNH8ZkjGcU.Ae',
    accountType: 'facilitator',
    __v: 0,
    createdAt: ISODate('2019-06-21T17:08:26.424Z'),
    updatedAt: ISODate('2019-06-21T17:08:26.615Z'),
    ssoId: ObjectId('5d1a59d79c78ad48c0480c92'),
    isEmailConfirmed: false,
  },

  /* 7 */
  {
    _id: ObjectId('5d0d2eae535e3a522445f7a4'),
    courseTemplates: [],
    courses: [],
    rooms: [ObjectId('5d0d2ed0535e3a522445f7a7')],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
    isTrashed: false,
    username: 'w_crush',
    email: '',
    firstName: 'Wesley',
    lastName: 'Crusher',
    password: '$2b$12$Luk2olr1mzTSwpTeQdMZZuGmLK5ymiIzjUzaf/qFICvixv7h.eoEi',
    accountType: 'participant',
    createdAt: ISODate('2019-06-21T19:23:27.148Z'),
    updatedAt: ISODate('2019-06-21T19:24:01.126Z'),
    __v: 0,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c91'),
    isEmailConfirmed: false,
  },

  /* 8 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c93'),
    username: 'jsilverman',
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c5f'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 9 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c94'),
    username: 'candice.roberts',
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c60'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 10 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c95'),
    username: 'wes',
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c61'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 11 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c96'),
    username: 'absvalteaching',
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c62'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 12 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c97'),
    username: 'maxray',
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c64'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 13 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c98'),
    username: 'mentorpd',
    email: 'ampd@fakeemail.com',
    password: '$2a$12$suZ74.AaY7AFS9sasRtqSOrUsmhFwOiAImP83i6CC0.EDcs1dHoaC',
    firstName: 'Ashley',
    lastName: 'Mays',
    createdAt: ISODate('2019-02-21T23:14:33.392Z'),
    updatedAt: ISODate('2019-02-22T00:20:10.316Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c63'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 14 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c99'),
    username: 'matraa57',
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c67'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 15 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c9a'),
    username: 'vklein',
    email: null,
    password: null,
    firstName: 'Valerie',
    lastName: 'Klein',
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c65'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 16 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c9b'),
    username: 'alice42',
    email: null,
    password: '$2a$08$Puko.4Ukg3fUVSfQsyhlauvFJ84/ymtidiL8qablVfic59zzC4gFi',
    firstName: 'Alice',
    lastName: 'Carrol',
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c66'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 17 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c9c'),
    username: 'testfix',
    email: 'testfix@test.com',
    password: '$2a$12$nQafJwfxx19P2vyBhDLXUeDFNdZU81t1eosZEvs.plyCP1HNSZFtW',
    firstName: 'testfix',
    lastName: null,
    createdAt: ISODate('2018-08-14T18:20:51.382Z'),
    updatedAt: ISODate('2018-08-14T18:20:51.382Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c69'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 18 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c9d'),
    username: 'dsl44',
    email: null,
    password: null,
    firstName: 'Daniel',
    lastName: 'Lewis',
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c68'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 19 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c9e'),
    username: 'mrs. wren',
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c6b'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 20 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480c9f'),
    username: 'tpool',
    email: 'tpool@fakeemail.com',
    password: '$2a$12$WA5cZStBrgopuQ1xD6RS2eO9EtNYHiBiQp137DdWgEldG5SSIpSJW',
    firstName: 'Tim',
    lastName: 'Pool',
    createdAt: ISODate('2018-09-23T14:55:15.655Z'),
    updatedAt: ISODate('2018-09-23T16:27:52.131Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c73'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 21 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480ca0'),
    username: 'salejandre',
    email: null,
    password: null,
    firstName: 'salejandre',
    lastName: null,
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c78'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 22 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480ca1'),
    username: 'actingstudent',
    email: 'al@fakeemail.com',
    password: '$2a$12$gPUKBtiXwchWW5Y/aBApcei3J69hV23pZDBQOFf4phK98uFdIzcwW',
    firstName: 'Al',
    lastName: 'Allison',
    createdAt: ISODate('2018-09-12T02:41:40.407Z'),
    updatedAt: ISODate('2018-09-12T13:29:14.361Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c7d'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 23 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480ca2'),
    username: 'trasheduser',
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    createdAt: ISODate('2019-06-18T15:06:41.262Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: true,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c82'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 24 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480ca3'),
    username: 'mtgstudent1',
    email: null,
    password: '$2a$12$VHxAuasK/L/9F/vJiAXtNewhM9xCAYXrJtbtG41M25QAoXkXb.8o.',
    firstName: 'Kerry',
    lastName: 'Davis',
    createdAt: ISODate('2019-02-21T13:00:49.191Z'),
    updatedAt: ISODate('2019-02-21T13:00:49.191Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c87'),
    accountType: 'participant',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 25 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480ca4'),
    username: 'hle22',
    email: null,
    password: null,
    firstName: 'Harold',
    lastName: null,
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c6e'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 26 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480ca5'),
    username: 'mtgteacher',
    email: 'alex@mtgfake.com',
    password: '$2a$12$jX8lx.4o2CMShsuMQHjfueR7sdf5ORrf3RGWO0yeHHMeLJoL55r2y',
    firstName: 'Alex',
    lastName: 'Smith',
    createdAt: ISODate('2019-02-21T13:00:49.191Z'),
    updatedAt: ISODate('2019-02-21T14:23:34.424Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c71'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 27 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480ca6'),
    username: 'morganf',
    email: null,
    password: '$2a$12$bJ6SE4Y7KTAt1VtatrwSku2Y.wqto0JQKUjJvkvwGHkoelr2tOKX.',
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-09-06T15:30:21.278Z'),
    updatedAt: ISODate('2018-09-06T15:30:21.278Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c76'),
    accountType: 'participant',
  },

  /* 28 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480ca7'),
    username: 'testUser',
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c7c'),
    accountType: 'participant',
  },

  /* 29 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480ca8'),
    username: 'pdadmin',
    email: 'pdadmin@test.com',
    password: '$2a$12$nQafJwfxx19P2vyBhDLXUeDFNdZU81t1eosZEvs.plyCP1HNSZFtW',
    firstName: 'PD',
    lastName: 'Admin',
    createdAt: ISODate('2018-08-14T18:20:51.382Z'),
    updatedAt: ISODate('2018-08-14T18:20:51.382Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c81'),
    accountType: 'facilitator',
  },

  /* 30 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480ca9'),
    username: 'student1',
    email: null,
    password: null,
    firstName: 'student1',
    lastName: null,
    createdAt: ISODate('2018-08-16T10:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c86'),
    accountType: 'participant',
  },

  /* 31 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480caa'),
    username: 'ssmith',
    email: 'ssmith@fakeemail.com',
    password: '$2a$12$rAJwBMeVR5RXPhKGGgMRdOM/OaOREMrsIPE2HZcBI0PCW2cME4IFi',
    firstName: 'Summer',
    lastName: 'Smith',
    createdAt: ISODate('2018-09-06T15:30:21.278Z'),
    updatedAt: ISODate('2019-09-27T14:33:58.294Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c8b'),
    accountType: 'facilitator',
    socketId: 'urTqCqppB5WREr54AAAE',
    rooms: [
      ObjectId('5d83f00add0c4946d81684cc'),
      ObjectId('5d83f029dd0c4946d81684d2'),
      ObjectId('5d83f39a15329f5bfcd49c0f'),
      ObjectId('5d83f3b615329f5bfcd49c15'),
      ObjectId('5d83f42e15329f5bfcd49c21'),
    ],
    courses: [ObjectId('5d83f32415329f5bfcd49c0c')],
    activities: [
      ObjectId('5d83f3e015329f5bfcd49c1a'),
      ObjectId('5d83f3fc15329f5bfcd49c1d'),
    ],
  },

  /* 32 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cab'),
    username: 'tracyc',
    email: null,
    password: '$2a$12$svhAmCvhB2Q0iSJlwMyH6.2q4nJKLBvnGAVfXRVqkXDJKotpWd4Wq',
    firstName: 'Tracy',
    lastName: 'Collins',
    createdAt: ISODate('2018-09-06T15:30:21.278Z'),
    updatedAt: ISODate('2018-09-06T15:30:21.278Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c6d'),
    accountType: 'participant',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 33 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cac'),
    username: 'mentort1',
    email: 'pjt@fakeemail.com',
    password: '$2a$12$wMVOnFgZlQpX6nBRQ9MlNe24I/u.i/nb3fN4XZSyAsnqX48KEkQdi',
    firstName: 'Pat',
    lastName: 'Jones',
    createdAt: ISODate('2019-02-21T23:14:33.392Z'),
    updatedAt: ISODate('2019-02-22T00:21:13.789Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c70'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 34 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cad'),
    username: 'sam3',
    email: null,
    password: '$2a$12$BncFqBAu92VeyuKX7WUQjuDREWncoR6BgG0.3aZOulruEs5iwb7qS',
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-09-05T20:57:31.730Z'),
    updatedAt: ISODate('2018-09-05T20:57:31.730Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c74'),
    accountType: 'participant',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 35 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cae'),
    username: 'superuser',
    email: 'superuser@fakeemail.com',
    password: null,
    firstName: 'superuser',
    lastName: null,
    createdAt: ISODate('2018-08-14T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c7a'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 36 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480caf'),
    username: 'alex8',
    email: null,
    password: '$2a$12$VJaCSw8ISla5ntkNL07qjuF.rU/ZV3xgmbnAyEbyUEN.acBOnavym',
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-09-05T20:57:31.730Z'),
    updatedAt: ISODate('2018-09-05T20:57:31.730Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c7f'),
    accountType: 'participant',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 37 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cb0'),
    username: 'eeyore',
    email: null,
    password: '$2a$08$Puko.4Ukg3yUVSfQsyhlauvFJ/4/ymtidiL8qab.Vfic59zzC4gFi',
    firstName: 'Ian',
    lastName: 'M.',
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c84'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 38 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cb1'),
    username: 'mtgstudent3',
    email: null,
    password: '$2a$12$ecQid5ydhJfIIpwp9R4bROEu5SIQ/VS81MweEymT07Jp2vfy/aBVq',
    firstName: 'Micah',
    lastName: 'Anderson',
    createdAt: ISODate('2019-02-21T13:00:49.191Z'),
    updatedAt: ISODate('2019-02-21T13:00:49.191Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c89'),
    accountType: 'participant',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 39 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cb2'),
    username: 'steve',
    email: null,
    password: null,
    firstName: 'steve',
    lastName: null,
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c6a'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 40 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cb3'),
    username: 'morty',
    email: null,
    password: '$2a$08$Puko.4Ukg3fUVSfQsyhlauvEJ84/ymUidiL7xablVfic59zzC4gFi',
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-08-17T10:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c72'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 41 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cb5'),
    username: 'ashleyc',
    email: null,
    password: '$2a$12$X7PKqTfa/ydePAKPNGGd4ObP9W6NSE34Cdwf3dYpT2BJh3oA2mSda',
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-09-06T15:30:21.278Z'),
    updatedAt: ISODate('2018-09-06T15:30:21.278Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c7b'),
    accountType: 'participant',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 42 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cb4'),
    username: 'mentort2',
    email: 'jmt2@fakeemail.com',
    password: '$2a$12$VGI3xp8WTtlOmEcPjmWbKOIKvVVyEfGElVwhQFSs31LnW.Q2hAw7i',
    firstName: 'Jack',
    lastName: 'Madison',
    createdAt: ISODate('2019-02-21T23:14:33.392Z'),
    updatedAt: ISODate('2019-02-22T00:23:05.662Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c77'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 43 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cb6'),
    username: 'mr_stadel',
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    createdAt: ISODate('2014-08-04T15:55:20.985Z'),
    updatedAt: ISODate('2018-08-27T19:17:23.796Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c80'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 44 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cb7'),
    username: 'mtgstudent2',
    email: null,
    password: '$2a$12$n4fBSZGf87HDoHIZiS1IiuMkcMjPAHFtORvQ07vS6CeO94Qe4SPR.',
    firstName: 'Jamie',
    lastName: 'Baker',
    createdAt: ISODate('2019-02-21T13:00:49.191Z'),
    updatedAt: ISODate('2019-02-21T13:00:49.191Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c85'),
    accountType: 'participant',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 45 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cb8'),
    username: 'rick',
    email: 'rick@gmail.com',
    password: '$2a$08$/c9pHIH086E5qc.Mxh04geJ62xygISgF9C7eQnMzsHoukmpZ/QcX.',
    firstName: 'Rick',
    lastName: 'Sanchez',
    createdAt: ISODate('2019-06-18T15:06:41.262Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c8a'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 46 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cb9'),
    username: 'drex',
    email: null,
    password: null,
    firstName: 'Dr.',
    lastName: 'Rex',
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c6c'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 47 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cba'),
    username: 'jamie4',
    email: null,
    password: '$2a$12$9yHQw56mEBj/3RdMj/1ohuF1pjxk9s.Jq6fBGAYqBs/wPwVyAvYR2',
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-09-05T20:57:31.730Z'),
    updatedAt: ISODate('2018-09-05T20:57:31.730Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c6f'),
    accountType: 'participant',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 48 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cbb'),
    username: 'testUser2',
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c75'),
    accountType: 'participant',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 49 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cbc'),
    username: 'teachertaylor',
    email: 'taylor@fakeemail.com',
    password: '$2a$12$p.4iz7z06yQdV4kyUAmq6.jG2Z0CHCCoyQppY21x8j5WhmcyDLxPG',
    firstName: 'Taylor',
    lastName: 'Taylorson',
    createdAt: ISODate('2018-09-06T15:30:21.278Z'),
    updatedAt: ISODate('2018-09-06T15:30:21.278Z'),
    isTrashed: false,
    isEmailConfirmed: true,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c79'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 50 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cbd'),
    username: 'nope',
    email: null,
    password: null,
    firstName: 'Nope',
    lastName: null,
    createdAt: ISODate('2018-08-14T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c7e'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 51 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cbe'),
    username: 'perryz',
    email: 'encmath2@gmail.com',
    password: '$2a$12$q1.0QW/dcY.OzwqfkzKLf.D.4i02m4Ypa0fHTqcqivJD.bxLn6NLa',
    firstName: 'Perry',
    lastName: 'Zeller',
    createdAt: ISODate('2018-08-12T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c83'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },

  /* 52 */
  {
    _id: ObjectId('5d1a59d79c78ad48c0480cbf'),
    username: 'perryu',
    email: 'encmath2@gmail.com',
    password: '$2b$12$eyzDkJziwMrVM.cUOEF72e.DazI2Q3gKzn22Px5alw4NkDnNCeRs6',
    firstName: 'Perry',
    lastName: 'Uller',
    createdAt: ISODate('2018-08-14T18:20:51.382Z'),
    updatedAt: ISODate('2019-06-18T15:06:41.262Z'),
    isTrashed: false,
    isEmailConfirmed: false,
    doForcePasswordChange: false,
    googleId: null,
    ssoId: ObjectId('5d1a59d79c78ad48c0480c88'),
    accountType: 'facilitator',
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
  },
  /* 3 */
  {
    _id: ObjectId('5bbbbd9a799302265829f5af'),
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
    isTrashed: false,
    firstName: 'Geordi',
    lastName: 'Laforge',
    username: 'g_laforge',
    email: 'glaforge98@gmail.com',
    ssoId: ObjectId('5d1a79262965546d970b765c'),
    accountType: 'participant',
    createdAt: ISODate('2019-07-01T21:20:38.419Z'),
    updatedAt: ISODate('2019-07-01T21:20:39.977Z'),
    __v: 0,
    socketId: 'htdAizfmaq2kCHG6AAAS',
    isEmailConfirmed: true,
  },
  {
    _id: ObjectId('5d321ad7e0d35047491888e1'),
    courseTemplates: [],
    courses: [],
    rooms: [],
    activities: [],
    notifications: [],
    bothRoles: false,
    isAdmin: false,
    seenTour: false,
    isTrashed: false,
    firstName: 'no',
    lastName: 'email',
    username: 'unconfirmed',
    email: 'vmtunconfirmed@gmail.com',
    ssoId: ObjectId('5d321ad6c927e8478532ca2e'),
    accountType: 'facilitator',
    createdAt: ISODate('2019-07-19T19:32:39.599Z'),
    updatedAt: ISODate('2019-07-19T19:33:31.344Z'),
    __v: 0,
    socketId: null,
    isEmailConfirmed: false,
  },
];
