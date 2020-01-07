import { REGISTER_REQUEST } from "./constants";


export const register = ( firstName, lastName, email, username, password, matchingPassword, role ) =>({
  type: REGISTER_REQUEST,
  payload: {
    firstName,
    lastName,
    email,
    username,
    password,
    matchingPassword,
    role
  }
});
