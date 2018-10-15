export {
  login,
  signup,
  gotUser,
  googleLogin,
  updateUserRooms,
  updateUserCourses,
  clearNotification,
  updateUserAccessNtfs,
  updateUserActivities,
  updateUserCourseTemplates,
  removeUserCourse,
  removeUserRooms,
  removeUserActivities, // ARE WE STORING ACTIVITIES ON THE USER OBJECT?
  addUserRooms,
  updateNotifications,
} from './user';
export {
  fail,
  start,
  clear,
  success,
  clearError,
  accessSuccess,
} from './loading';
export {
  getRooms,
  gotRooms,
  createRoom,
  gotCurrentRoom,
  getCurrentRoom,
  clearCurrentRoom,
  createdRoomConfirmed,
  populateRoom,
  updateRoom,
  joinRoom,
  leaveRoom,
  removeRoom,
  updateRoomMembers,
  enterRoomWithCode,
  addRoomMember,
} from './rooms';
export {
  addCourse,
  getCourses,
  gotCourses,
  removeCourse,
  removeCourseRoom,
  updateCourse,
  createCourse,
  createdCourses,
  updateCourseRooms,
  updateCourseActivities,
  clearCurrentCourse,
  populateCurrentCourse,
  updateCourseMembers,
} from './courses';
export {
  getCourseTemplates,
  gotCourseTemplates,
  createCourseTemplate,
  createdCourseTemplate,
} from './courseTemplates';
export {
  getActivities,
  gotActivities,
  getCurrentActivity,
  clearCurrentActivity,
  gotCurrentActivity,
  createActivity,
  createdActivityConfirmed,
  removeActivity,
} from './activities';
export {
  joinWithCode,
  requestAccess,
  grantAccess,
} from './access'
