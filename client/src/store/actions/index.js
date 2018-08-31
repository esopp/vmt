export {
  login,
  signup,
  gotUser,
  googleLogin,
  grantAccess,
  requestAccess,
  updateUserRooms,
  updateUserCourses,
  clearNotification,
  updateUserAccessNtfs,
  updateUserAssignments,
  updateUserCourseTemplates,
  removeUserCourse,
  removeUserRoom,
  removeUserAssignment, // ARE WE STORING ASSIGNMENTS ON THE USER OBJECT?
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
  removeRoom,
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
  updateCourseAssignments,
  clearCurrentCourse,
  populateCurrentCourse,
} from './courses';
export {
  getCourseTemplates,
  gotCourseTemplates,
  createCourseTemplate,
  createdCourseTemplate,
} from './courseTemplates';
export {
  getRoomTemplates,
  gotRoomTemplates,
  createRoomTemplate,
  createdRoomTemplate,
} from './roomTemplates';
export {
  getAssignments,
  gotAssignments,
  getCurrentAssignment,
  clearCurrentAssignment,
  gotCurrentAssignment,
  createAssignment,
  createdAssignmentConfirmed,
  removeAssignment,
} from './assignments';
