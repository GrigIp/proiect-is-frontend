import {FETCH_GRADES_REQUEST} from "./constants";

export const fetchGrades = ( username,role ) =>({
  type: FETCH_GRADES_REQUEST,
  payload: {
    username,
    role
  }
});
