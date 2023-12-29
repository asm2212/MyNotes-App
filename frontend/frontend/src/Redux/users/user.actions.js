import axios from 'axios';
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from './user.types';

export const getUser = (obj) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER_LOADING,
  });

  try {
    const data = await axios.post("http://localhost:5001/user/login",
    {
        method:"post",
        data:obj
    });
    const { message, token, status } = data.data;
    console.log(message)

    if (status === 1) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
    } else {
      dispatch({ type: LOGIN_USER_ERROR });
    }
  } catch (error) {
    dispatch({ type: LOGIN_USER_ERROR });
  }
};
