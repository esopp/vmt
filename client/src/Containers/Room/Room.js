import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/';
import API from '../../utils/apiRequests';
import Dashboard from '../../Layout/Dashboard/Dashboard';
import NewRoom from '../Create/NewRoom/NewRoom'
import BoxList from '../../Layout/BoxList/BoxList';
import Aux from '../../Components/HOC/Auxil';
import Modal from '../../Components/UI/Modal/Modal';
import Button from '../../Components/UI/Button/Button';
// import Students from './Students/Students';
class Room extends Component {
  state = {
    activeTab: 'Summary',
    access: false,
    guestMode: false,
    currentRoom: {}, // Right now I'm just saving currentCourse is state to compare the incoming props currentCourse to look for changes
    tabs: [
      {name: 'Summary'},
      {name: 'Students'},
      {name: 'Grades'},
      {name: 'Insights'},
      {name:'Settings'}
    ],
  }

  async componentDidMount() {
    await this.props.getCurrentRoom();

  }
  render() {
    const room = {}
    room.name = 'Room'
    switch (this.state.activeTab) {

    }

    return (
      <Aux>
        {/* {guestModal}
        {accessModal} */}
        <Dashboard
          title={room.name ? `Course: ${room.name}` : null}
          crumbs={[{title: 'Profile', link: '/dashboard'}, {title: room.name ? room.name : null, link: `/dashboard/room/${room._id}`}]}
          sidePanelTitle={room.name}
          // contentCreate={contentCreate}
          // content={content}
          tabs={this.state.tabs}
          activeTab={this.state.activeTab}
          activateTab={event => this.setState({activeTab: event.target.id})}
        />
      </Aux>
      )
  }
}

const mapStateToProps = store => {
  return {
    currentRoom: store.roomReducer.currentRoom,
    currentCourse: store.courseReducer.currentCourse,
    userId: store.userReducer.userId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // updateCourseRooms: room => dispatch(actions.updateCourseRooms(room)),
    // getCurrentCourse: id => dispatch(actions.getCurrentCourse(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
