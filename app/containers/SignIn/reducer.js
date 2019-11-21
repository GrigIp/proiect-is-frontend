import { AUTH_SUCCESS, AUTH_FAILURE } from "./constants";
import { produce } from "immer";

const initialState = {};

const signInReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case AUTH_SUCCESS: {
        return { ...state, error: null, token: action.payload };
      }
      case AUTH_FAILURE: {
        return { ...state, token: null, error: action.payload };
      }
      default:
        return state;
    }
  });

export default signInReducer;
