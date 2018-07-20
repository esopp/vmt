import React, { Component } from 'react';
import TextInput from '../../../Components/Form/TextInput/TextInput';
import Dropdown from '../../../Components/UI/Dropdown/Dropdown';
import ContentBox from '../../../Components/UI/ContentBox/ContentBox';
import Button from '../../../Components/UI/Button/Button';
import classes from './newCourse.css';
import glb from '../../../global.css';
class NewCourse extends Component {
  state = {
    courseName: '',
    description: '',
    rooms: [],
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  submitForm = event => {
    event.preventDefault();
    const roomIds = this.state.rooms.map(room => room.id);
    const newCourse = {
      courseName: this.state.courseName,
      description: this.state.description,
      rooms: roomIds,
      creator: this.props.userId,
    }
    // update backend via redux so we can add this to the global state of courses
    this.props.createCourse(newCourse);
    this.props.updateUserCourses(newCourse);
  }
  // this will be passed down to the dropdown menu and when we make a selection
  // it will pass a list of selected rooms back up and then we can synch our state
  updateRooms = rooms => {
    this.setState({
      rooms: rooms
    })
  }

  render() {
    // prepare dropdown list of rooms
    const roomsSelected = this.state.rooms.map(room => (
      // sel- to differentiate between dropdown ids
      <div id={`sel-${room.id}`}>{room.name}</div>
    ))
    // i find this to be annoying...why wont .map just return an empty array
    // if this.props.myRooms does not exist
    let myRooms;
    if (this.props.myRooms) {
      myRooms = this.props.myRooms.map(room => ({
        id: room._id, name: room.roomName,
      }))
    }
    const publicRooms = this.props.rooms.map(room => ({
      id: room._id, name: room.roomName
    }))
    return (
      <div className={classes.NewCourse}>
        <form>
          <TextInput
            name='courseName'
            label='Enter Course Name'
            change={this.changeHandler}
          />
          <TextInput
            name='description'
            label='Description'
            change={this.changeHandler}
          />
          <div className={glb.FlexRow}>
            <div className={classes.Dropdown}>
              <Dropdown list={publicRooms} title='Select public rooms...' selectHandler={this.updateRooms}/>
              <Dropdown list={myRooms} title='Select your rooms...' selectHandler={this.updateRooms}/>
            </div>
            <div className={classes.Selected}>
              <ContentBox title='Rooms added to this course' align='center'>
                {roomsSelected}
              </ContentBox>
            </div>
          </div>
          <Button click={this.submitForm}>Submit</Button>
        </form>
      </div>
    )
  }
}

export default NewCourse;
