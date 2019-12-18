import { AUTH_REQUEST } from "./constants";

export const signIn = ( username, password, remember ) =>({
  type: AUTH_REQUEST,
  payload: {
    username,
    password,
    remember
  }
});
