import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
} from "./user.types";

const initialState = {
  token: null,
  auth: false,
  loading: false,
  error: false,
};

// Reducer function
export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER_LOADING:
      return {
        ...state,
        loading: true,
        error: false, // Make sure to reset the error flag when loading starts
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        token: payload,
        auth: true,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
