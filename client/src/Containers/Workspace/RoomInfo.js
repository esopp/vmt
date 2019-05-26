import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import classes from './roomInfo.css';
import { EditableText } from '../../Components';
import ToolTip from '../../Components/ToolTip/ToolTip';
import Expand from '../../Components/UI/ContentBox/expand';

class RoomInfo extends Component {
  state = {
    expanded: true,
    copied: false,
  };

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  toggleCollapse = () => {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  };

  copy = () => {
    this.setState({ copied: true }, () => {
      this.timer = setTimeout(() => {
        this.setState({ copied: false });
      }, 5000);
    });
  };

  render() {
    const { role, updatedActivity, room, currentTab, temp } = this.props;
    const { expanded, copied } = this.state;
    return (
      <div className={classes.RoomDescription}>
        <div className={classes.TabNameTitle}>
          <EditableText
            owner={role === 'facilitator'}
            inputType="INPUT"
            resource="tab"
            parentResource={updatedActivity ? 'activity' : 'room'}
            id={room.tabs[currentTab]._id}
            parentId={room._id}
            field="name"
          >
            {room.tabs[currentTab].name}
          </EditableText>
          <div
            onClick={this.toggleCollapse}
            onKeyPress={this.toggleCollapse}
            role="button"
            tabIndex="-2"
            className={classes.ToggleView}
            style={{
              transform: expanded ? `rotate(0)` : `rotate(90deg)`,
            }}
          >
            <Expand />
          </div>
        </div>
        <div
          className={
            expanded ? classes.InstructionsContainer : classes.Collapsed
          }
        >
          <h4 className={classes.InstructionsTitle}>Instructions: </h4>
          {temp ? (
            <span className={classes.CopiedContainer}>
              Share this link to invite others{' '}
              <CopyToClipboard onCopy={this.copy} text={window.location.href}>
                <div className={classes.CopyRow}>
                  <ToolTip
                    text={
                      copied
                        ? 'copied'
                        : 'click this link to copy it to your clipboard'
                    }
                    color={copied ? 'Green' : null}
                  >
                    <span className={classes.LinkContainer}>
                      {window.location.href}
                    </span>
                  </ToolTip>
                  <i className={['fas fa-copy', classes.CopyIcon].join(' ')} />
                </div>
              </CopyToClipboard>
            </span>
          ) : (
            <EditableText
              owner={role === 'facilitator'}
              inputType="TEXT_AREA"
              resource="tab"
              parentResource={updatedActivity ? 'activity' : 'room'}
              id={room.tabs[currentTab]._id}
              parentId={room._id}
              field="instructions"
            >
              {room.tabs[currentTab].instructions || room.instructions}
            </EditableText>
          )}
        </div>
      </div>
    );
  }
}

RoomInfo.propTypes = {
  role: PropTypes.string.isRequired,
  updatedActivity: PropTypes.func.isRequired,
  room: PropTypes.shape({}).isRequired,
  currentTab: PropTypes.number.isRequired,
  temp: PropTypes.bool.isRequired,
};

export default RoomInfo;
