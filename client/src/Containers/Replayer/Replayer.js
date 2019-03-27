import React, { Component, Fragment } from "react";
import WorkspaceLayout from "../../Layout/Workspace/Workspace";
import Modal from "../../Components/UI/Modal/Modal.js";
import { connect } from "react-redux";
import { updateRoom, populateRoom } from "../../store/actions/";
import {
  ReplayerControls,
  DesmosReplayer,
  GgbReplayer,
  ChatReplayer
} from "./index";
import { CurrentMembers, Loading } from "../../Components";

import { Tabs, Tools } from "../Workspace";
// import throttle from "lodash/throttle";
import moment from "moment";
const MAX_WAIT = 10000; // 10 seconds
const BREAK_DURATION = 2000;
const PLAYBACK_FIDELITY = 100;
class Replayer extends Component {
  state = {
    playing: false,
    playbackSpeed: 1,
    logIndex: 0,
    timeElapsed: 0, // MS
    absTimeElapsed: 0,
    changingIndex: false,
    currentMembers: [],
    allTabsLoaded: false,
    startTime: "",
    loading: true,
    currentTab: 0,
    multipleTabTypes: false,
    isFullscreen: false
  };
  tabsLoaded = 0;
  updatedLog = [];

  componentDidMount() {
    // @TODO We should never populate the tabs events before getting here
    // we dont need them for the regular room activity only for playback
    this.props.populateRoom(this.props.match.params.room_id, { events: true });
  }

  componentDidUpdate(prevProps, prevState) {
    // Once we've fetched the room, build a log of all the events by combining all of the events from each tab
    // in chornological order
    if (prevProps.loading && !this.props.loading) {
      this.log = this.props.room.log;
      this.endTime = moment
        .unix(this.log[this.log.length - 1].timestamp / 1000)
        .format("MM/DD/YYYY h:mm:ss A");
      /** @todo refacotring to a for loop */
      this.relativeDuration = this.log.reduce((acc, cur, idx, src) => {
        // Copy currentEvent
        let event = { ...cur };
        // Add the relative Time
        event.relTime = acc;
        // ADD A TAB FOR EVENTS THAT DONT ALREADY HAVE THEM TO MAKE SKIPPING AROUND EASIER
        if (!event.tab) {
          // when would we ever have an event without a tab ID ? // is this so it works with old data before we had tabs?
          if (!src[idx - 1]) {
            //IF this is the first event give it the starting tab
            event.tab = this.props.room.tabs[0]._id;
          } else {
            event.tab = this.updatedLog[this.updatedLog.length - 1].tab; //Else give it the same tabId as the event before
          }
        }
        this.updatedLog.push(event);
        // calculate the next time
        if (src[idx + 1]) {
          let diff = src[idx + 1].timestamp - cur.timestamp;
          if (diff < MAX_WAIT) {
            return (acc += diff);
          } else {
            this.updatedLog.push({
              synthetic: true,
              message: `No activity...skipping ahead to ${moment
                .unix(src[idx + 1].timestamp / 1000)
                .format("MM/DD/YYYY h:mm:ss A")}`,
              relTime: (acc += BREAK_DURATION),
              tab: this.updatedLog[this.updatedLog.length - 1].tab
            });
            return (acc += BREAK_DURATION);
          }
        } else return acc;
      }, 0);
      const updatedMembers = [...this.state.currentMembers];
      if (this.log[0].autogenerated) {
        // DONT NEED TO CHECK IF THEYRE ENTERING OR EXITING, BECAUSE ITS THE FIRST EVENT THEY MUST
        // BE ENTERING
        updatedMembers.push({ user: this.log[0].user });
      }
      this.setState({
        startTime: moment
          .unix(this.log[0].timestamp / 1000)
          .format("MM/DD/YYYY h:mm:ss A"),
        currentMembers: updatedMembers
      });
      this.setState({ loading: false });
    }

    if (
      !prevState.playing &&
      this.state.playing &&
      this.state.logIndex < this.updatedLog.length
    ) {
      this.playing();
    } else if (!this.state.playing && this.interval) {
      clearInterval(this.interval);
    }

    if (
      this.props.changingIndex &&
      this.log[this.props.index].tab !==
        this.props.tabs[this.props.currentTab]._id
    ) {
      let tabStates = { ...this.state.tabState };
      tabStates[this.props.tabs[prevProps.currentTab]._id] = {
        construction: this.calculator.getState(),
        lastIndex: prevProps.index
      };
      this.setState({ tabStates });
      // let startIndex;
      // if (tabStates[log[this.props.index].tab]) {
      //   startIndex = tabStates[log[this.props.index].tab].lastIndex;
      // }
      // else {startIndex = prevProps.index}
      let tabIndex;
      // find the target tab index
      this.props.tabs.forEach((tab, i) => {
        if (tab._id === this.props.log[this.props.index].tab) {
          tabIndex = i;
        }
      });
      // We've promisified changeTab() so we can ensure we wait for the state to be updated before proceeding
      this.props.changeTab(tabIndex);
    }
  }

  playing = () => {
    this.interval = setInterval(() => {
      let timeElapsed = this.state.timeElapsed;
      let logIndex = this.state.logIndex;
      let currentMembers = [...this.state.currentMembers];
      let startTime = this.state.startTime;
      let absTimeElapsed = this.state.absTimeElapsed;
      timeElapsed += PLAYBACK_FIDELITY * this.state.playbackSpeed;
      absTimeElapsed += PLAYBACK_FIDELITY * this.state.playbackSpeed;
      let nextEvent = this.updatedLog[this.state.logIndex + 1];
      let currentTab = this.state.currentTab;
      if (!nextEvent) {
        return this.setState({ playing: false });
      }
      if (timeElapsed >= nextEvent.relTime) {
        // WHAT IF ITS GREAT THAN THE NEXT...NEXT EVENT (THIS HAPPENS WHEN WE INCREASE THE PLAY SPEED) ???? NOT SURE HOW TO HANDLE
        if (nextEvent.tab) {
          this.props.room.tabs.forEach((tab, i) => {
            if (tab._id === nextEvent.tab) {
              currentTab = i;
            }
          });
        }
        logIndex++;
        if (nextEvent.autogenerated) {
          if (nextEvent.text.includes("joined")) {
            currentMembers.push({ user: nextEvent.user });
          } else if (nextEvent.text.includes("left")) {
            currentMembers = currentMembers.filter(u => {
              return u.user._id !== nextEvent.user._id;
            });
          }
        }
        if (this.updatedLog[this.state.logIndex].synthetic) {
          startTime = moment(nextEvent.timestamp).format(
            "MM/DD/YYYY h:mm:ss A"
          );
          absTimeElapsed = 0;
        }
      }
      this.setState(prevState => ({
        logIndex,
        timeElapsed,
        currentMembers,
        startTime,
        absTimeElapsed,
        changingIndex: false,
        currentTab
      }));
    }, PLAYBACK_FIDELITY);
  };

  setTabLoaded = id => {
    this.tabsLoaded++;
    if (this.tabsLoaded === this.props.room.tabs.length) {
      this.setState({ allTabsLoaded: true });
    }
  };

  // Takes a % of total progress and goes to the nearest timestamp
  goToTime = percent => {
    let logIndex;
    let timeElapsed = percent * this.relativeDuration;
    if (percent === 1) {
      // I.e. if 100% then go to the last event
      logIndex = this.updatedLog.length - 1;
      timeElapsed = this.relativeDuration;
    } else {
      this.updatedLog.some((entry, i) => {
        if (entry.relTime > timeElapsed) {
          logIndex = i === 0 ? 0 : i - 1;
          return true;
        }
        return false;
      });
    }
    let currentTab = this.state.currentTab;
    this.props.room.tabs.forEach((tab, i) => {
      if (tab._id === this.updatedLog[logIndex].tab) {
        currentTab = i;
      }
    });
    this.setState({
      timeElapsed,
      logIndex,
      currentTab,
      playing: false,
      changingIndex: true
    });
    // setTimeout(() => this.setState({playing:}))
  };

  pausePlay = () => {
    this.setState(prevState => ({
      playing: !prevState.playing
    }));
  };

  reset = () => {
    this.setState({ changingIndex: false });
  };

  setCurrentMembers = currentMembers => {
    this.setState({ currentMembers });
  };

  setSpeed = speed => {
    this.setState({ playbackSpeed: speed });
  };

  changeTab = index => {
    return new Promise((resolve, reject) => {
      this.setState({ currentTab: index }, () => {
        resolve();
      });
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  toggleFullscreen = () =>
    this.setState(prevState => ({
      isFullscreen: !prevState.isFullscreen
    }));

  render() {
    let replayer = (
      <ReplayerControls
        playing={this.state.playing}
        pausePlay={this.pausePlay}
        duration={this.relativeDuration}
        startTime={this.state.startTime}
        absTimeElapsed={this.state.absTimeElapsed}
        goToTime={this.goToTime}
        changingIndex={this.state.changingIndex}
        speed={this.state.playbackSpeed}
        setSpeed={this.setSpeed}
        relTime={this.state.timeElapsed}
        index={this.state.logIndex}
        log={this.updatedLog}
        endTime={this.endTime}
        reset={this.reset}
        currentMembers={this.state.currentMembers}
        setCurrentMembers={this.setCurrentMembers}
        toggleFullscreen={this.toggleFullscreen}
        isFullscreen={this.state.isFullscreen}
      />
    );

    let chat = (
      <ChatReplayer
        roomId={this.props.room._id}
        log={this.updatedLog}
        index={this.state.logIndex}
        changingIndex={this.state.changingIndex}
        reset={this.reset}
        setCurrentMembers={this.setCurrentMembers}
      />
    );
    let graphs = this.props.room.tabs.map((tab, i) => {
      if (tab.tabType === "geogebra") {
        return (
          <GgbReplayer
            log={this.updatedLog}
            index={this.state.logIndex}
            changingIndex={this.state.changingIndex}
            playing={this.state.playing}
            reset={this.reset}
            changeTab={this.changeTab}
            currentTab={this.state.currentTab}
            setTabLoaded={this.setTabLoaded}
            tab={tab}
            tabId={i}
            inView={this.state.currentTab === i}
          />
        );
      } else {
        return (
          <DesmosReplayer
            log={this.updatedLog}
            index={this.state.logIndex}
            changingIndex={this.state.changingIndex}
            playing={this.state.playing}
            reset={this.reset}
            changeTab={this.changeTab}
            currentTab={this.state.currentTab}
            setTabLoaded={this.setTabLoaded}
            tab={tab}
            inView={this.state.currentTab === i}
          />
        );
      }
    });
    const { room, user } = this.props;
    const event = this.updatedLog[this.state.logIndex] || {};
    return (
      <Fragment>
        <WorkspaceLayout
          graphs={graphs}
          user={user}
          chat={this.updatedLog.length > 0 ? chat : null}
          tabs={
            <Tabs
              tabs={room.tabs}
              changeTabs={this.changeTab}
              currentTab={this.state.currentTab}
            />
          }
          currentMembers={
            this.state.currentMembers.length > 0 ? (
              <CurrentMembers
                currentMembers={this.state.currentMembers.map(
                  member => member.user
                )}
                members={room.members}
                expanded={true}
                activeMember={event.user}
              />
            ) : null
          }
          bottomLeft={replayer}
          activeMember={event.user}
          replayerControls={replayer}
          currentTab={this.state.currentTab}
          roomName={`${room.name} Replayer`}
          bottomRight={
            <Tools
              goBack={this.goBack}
              toggleControl={this.toggleControl}
              lastEvent={this.updatedLog[this.state.logIndex]}
              replayer
            />
          }
          replayer
          loaded={this.state.allTabsLoaded}
          isFullscreen={this.state.isFullscreen}
          membersExpanded
          chatExpanded
          instructionsExpanded
        />
        {!this.state.allTabsLoaded && this.updatedLog.length > 0 ? (
          <Loading message="Preparing the replayer..." />
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    room: state.rooms.byId[ownProps.match.params.room_id],
    user: state.user,
    loading: state.loading.loading
  };
};

export default connect(
  mapStateToProps,
  { updateRoom, populateRoom }
)(Replayer);
