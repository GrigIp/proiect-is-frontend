import { REGISTER_SUCCESS, REGISTER_FAILURE } from "./constants";
import { produce } from "immer";

const initialState = {};

const registerReducer = (state = initialState, action) =>
    produce(state, () => {
      switch (action.type) {
        case REGISTER_SUCCESS: {
          return {...state, error: null, response: action.payload};
        }
        case REGISTER_FAILURE: {
          return { ...state, response: null, error: action.payload};
        }
        default:
          return state;
      }
    });

export default registerReducer;
