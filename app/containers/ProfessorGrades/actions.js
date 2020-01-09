import {FETCH_GRADES_REQUEST, CREATE_GRADE_REQUEST} from "./constants";

export const fetchGrades = () =>({
  type: FETCH_GRADES_REQUEST,
});

export const createGrade = (username, classId, date, grade) =>({
  type: CREATE_GRADE_REQUEST,
  username,
  classId,
  date,
  grade
});
