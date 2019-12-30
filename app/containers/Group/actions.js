import {FETCH_GROUP_REQUEST, FETCH_STUDENTS_REQUEST} from "./constants";

export const fetchStudentsByGroupId = ( groupId ) =>({
  type: FETCH_STUDENTS_REQUEST,
  payload: {
    groupId
  }
});

export const fetchGroupByUsername = ( username ) =>({
  type: FETCH_GROUP_REQUEST,
  payload: {
    username,
  }
});
