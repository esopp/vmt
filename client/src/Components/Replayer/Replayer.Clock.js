import React, { PureComponent } from 'react';
import moment from 'moment';
import classes from './Replayer.Styles.css';

const msToTime = (duration) => {
  // let ms = parseInt((duration % 1000) / 100)
  let seconds = parseInt((duration / 1000) % 60, 10);
  let minutes = parseInt((duration / (1000 * 60)) % 60, 10);
  let hours = parseInt((duration / (1000 * 60 * 60)) % 24, 10);
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  return hours + ":" + minutes + ":" + seconds
  // + ms + "0";
}

class Clock extends PureComponent {

  state = {
    relTime: 0,
    remainingTime: this.props.duration,
    absTime: this.props.startTime
  }

  // componentDidUpdate(prevProps) {
  //   if (!prevProps.playing && this.props.playing) {
  //     this.timer = setInterval(this.add, 1000)
  //   }
  //   if (!this.props.playing && prevProps.playing) clearInterval(this.timer)
  //   if (this.state.remainingTime <= 0) clearInterval(this.timer)
  //   if (prevProps.startTime !== this.props.startTime) {
  //     this.setState({relTime: this.props.startTime})
  //   }
  // }

  // add = () => {
  //   const absTime = this.state.absTime + 1000
  //   const relTime = moment(this.state.relTime).add(1, 'second').format('MM/DD/YYYY h:mm:ss A')
  //   const remainingTime = this.state.remainingTime - 1000;
  //   this.props.getProgress((this.state.absTime/this.props.duration) * 100 )
  //   this.setState({absTime, relTime, remainingTime,})
  // }

  render() {
    return (
      <div className={classes.Clocks}>
        <div className={classes.AbsClocks}>
          <div className={classes.AbsTime}>{msToTime(this.props.relTime)}</div>
          <div className={classes.AbsTime}>{msToTime(this.props.duration - this.props.relTime)}</div>
        </div>
        <div className={classes.RelTime}>{this.state.absTime}</div>

      </div>
    )
  }
}

export default Clock;
