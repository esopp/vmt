import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './currentMembers.css';
import Avatar from '../UI/Avatar/Avatar';

class CurrentMembers extends Component {
  // state = {
  //   expanded: true
  // }
  shouldComponentUpdate(nextProps) {
    const { currentMembers, activeMember } = this.props;
    if (
      nextProps.currentMembers !== currentMembers ||
      nextProps.activeMember !== activeMember
    ) {
      return true;
    }
    return false;
  }

  toggleExpansion = () => {
    const { toggleExpansion } = this.props;
    toggleExpansion('members');
  };

  render() {
    const { currentMembers, members, activeMember, expanded } = this.props;
    console.log('CURRENT MEMBERS: ', currentMembers);
    return (
      <div className={classes.Container}>
        <div
          className={classes.Title}
          onClick={this.toggleExpansion}
          onKeyPress={this.toggleExpansion}
          role="button"
          tabIndex="-1"
        >
          Currently in this room
          <div className={classes.Count}>{currentMembers.length}</div>
        </div>
        <div
          className={expanded ? classes.Expanded : classes.Collapsed}
          data-testid="current-members"
        >
          {currentMembers.map(user => {
            // get the users color
            const member = members.filter(m => m.user._id === user._id)[0];
            if (member) {
              return (
                <div
                  className={[
                    classes.Avatar,
                    user._id === activeMember
                      ? classes.Active
                      : classes.Passive,
                  ].join(' ')}
                  key={user.username}
                >
                  <Avatar username={user.username} color={member.color} />
                </div>
              );
            }
            return (
              <div
                key={user.username}
                className={[
                  classes.Avatar,
                  user._id === activeMember ? classes.Active : classes.Passive,
                ].join(' ')}
              >
                <Avatar username={`${user.username} (admin)`} color="#ffd549" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

CurrentMembers.propTypes = {
  currentMembers: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string])
  ).isRequired,
  members: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activeMember: PropTypes.string,
  expanded: PropTypes.bool.isRequired,
  toggleExpansion: PropTypes.func.isRequired,
};

CurrentMembers.defaultProps = {
  activeMember: null,
};

export default CurrentMembers;
