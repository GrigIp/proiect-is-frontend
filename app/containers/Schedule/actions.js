import {FETCH_SCHEDULE_REQUEST} from "./constants";

export const fetchSchedule = ( username, role ) =>({
  type: FETCH_SCHEDULE_REQUEST,
  payload: {
    username,
    role
  }
});

