import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, RadioBtn, Button } from '../../Components';
import RoomOpts from './NewResource/RoomOpts';
import classes from './newTabForm.css';
import API from '../../utils/apiRequests';

class NewTabForm extends Component {
  state = {
    name: '',
    instructions: '',
    ggbFile: '',
    desmosLink: '',
    ggb: true,
    appName: 'classic',
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
      errorMessage: null,
    });
  };

  onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.submit();
    }
  };
  // @TODO move this somewhere it can be shared with Containsers/Workspace/NewTabForm
  // maybe it makes sense to move newTabForm Here because its creating something
  uploadGgbFiles = () => {
    const { ggbFile } = this.state;
    if (typeof ggbFile !== 'object' || ggbFile.length < 1) {
      return Promise.resolve({
        data: {
          result: [],
        },
      });
    }
    const formData = new window.FormData();

    // eslint-disable-next-line no-restricted-syntax
    for (const f of ggbFile) {
      formData.append('ggbFiles', f);
    }
    return API.uploadGgbFiles(formData);
  };

  submit = () => {
    const {
      room,
      user,
      activity,
      updatedRoom,
      sendEvent,
      closeModal,
      updatedActivity,
    } = this.props;
    const { name, instructions, ggb, desmosLink, appName } = this.state;
    if (name.trim().length <= 1) {
      this.setState({
        errorMessage: 'Please provide a name for the tab',
      });
      return;
    }
    const newTab = {
      name,
      desmosLink,
      appName,
      instructions,
      tabType: ggb ? 'geogebra' : 'desmos',
      room: room ? room._id : null,
      activity: activity ? activity._id : null,
    };
    this.uploadGgbFiles()
      .then(results => {
        if (results && results.data) {
          // THIS MAY BE MEHAFUCKED UO NOW
          const [ggbFile] = results.data.result;
          newTab.ggbFile = ggbFile;
        }
        return API.post('tabs', newTab);
      })
      .then(res => {
        let tabs;
        if (room) {
          tabs = [...room.tabs];
          tabs.push(res.data.result);
          updatedRoom(room._id, { tabs });
          newTab.creator = {
            username: user.username,
            _id: user._id,
          };
          newTab.message = {
            text: `${newTab.creator.username} created a new tab`,
            room: room._id,
            autogenerated: true,
            messageType: 'NEW_TAB',
            timestamp: new Date().getTime(),
          };
          newTab._id = res.data.result._id;
          sendEvent(newTab);
        } else {
          tabs = [...activity.tabs];
          tabs.push(res.data.result);
          // UPDATE REDUX ACTIVITY
          updatedActivity(activity._id, { tabs });
        }
        closeModal();
      })
      .catch(() => {
        // DISPLAY THIS ERROR MESSAGE: @TODO
      });
  };

  setGgbFile = event => {
    this.setState({
      ggbFile: event.target.files,
    });
  };

  render() {
    const {
      name,
      errorMessage,
      ggb,
      desmosLink,
      appName,
      instructions,
    } = this.state;
    return (
      <div className={classes.NewTabModal}>
        <h2>Create A New Tab</h2>
        <TextInput
          light
          value={name}
          change={this.changeHandler}
          onKeyDown={this.onKeyDown}
          name="name"
          label="Name"
          autofill="none"
        />
        {errorMessage ? (
          <div className={classes.ErrorMessage}>{errorMessage}</div>
        ) : null}
        <TextInput
          light
          value={instructions}
          change={this.changeHandler}
          onKeyDown={this.onKeyDown}
          name="instructions"
          label="Instructions"
        />
        <div className={classes.RadioGroup}>
          <RadioBtn
            name="geogebra"
            checked={ggb}
            check={() => this.setState({ ggb: true })}
          >
            GeoGebra
          </RadioBtn>
          <RadioBtn
            name="desmos"
            checked={!ggb}
            check={() => this.setState({ ggb: false })}
          >
            Desmos
          </RadioBtn>
        </div>
        <RoomOpts
          tab
          ggb={ggb}
          setGgbFile={this.setGgbFile}
          setGgbApp={newAppName => this.setState({ appName: newAppName })}
          desmosLink={desmosLink}
          setDesmosLink={event =>
            this.setState({ desmosLink: event.target.value })
          }
          appName={appName}
        />
        <Button m={10} click={this.submit}>
          Create
        </Button>
      </div>
    );
  }
}

NewTabForm.propTypes = {
  room: PropTypes.shape({}),
  user: PropTypes.shape({}).isRequired,
  activity: PropTypes.shape({}),
  updatedRoom: PropTypes.func.isRequired,
  updatedActivity: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  sendEvent: PropTypes.func.isRequired,
};

NewTabForm.defaultProps = {
  room: null,
  activity: null,
};
export default NewTabForm;
