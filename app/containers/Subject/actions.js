import { FETCH_SUBJECT_REQUEST } from "./constants";

export const fetchSubject = (role) =>({
  type: FETCH_SUBJECT_REQUEST,
  payload: role
});
