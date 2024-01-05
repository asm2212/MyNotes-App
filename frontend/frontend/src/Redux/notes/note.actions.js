import axios from "axios";
import { store } from "../store";
import { LOGOUT } from "../users/user.types";
import {
  CREATE_NOTES_ERROR,
  CREATE_NOTES_LOADING,
  CREATE_NOTES_SUCCESS,
  DELETE_NOTES_ERROR,
  DELETE_NOTES_LOADING,
  DELETE_NOTES_SUCCESS,
  GET_NOTES_ERROR,
  GET_NOTES_LOADING,
  GET_NOTES_SUCCESS,
  UPDATE_NOTES_ERROR,
  UPDATE_NOTES_LOADING,
  UPDATE_NOTES_SUCCESS,
} from "./note.types";
import { BASE_URL } from "../../constants/config";

const API_BASE_URL = BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const makeApiRequest = async (method, endpoint, data = null, headers = {}) => {
  const { token } = store.getState().userReducer;

  try {
    const response = await axiosInstance({
      method,
      url: endpoint,
      data,
      headers: {
        Authorization: token,
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Server Error:", error.response.data);
    } else if (error.request) {
      console.error("Request Error:", error.request);
    } else {
      console.error("General Error:", error.message);
    }

    throw error;
  }
};

export const getNotes = () => async (dispatch) => {
  dispatch({ type: GET_NOTES_LOADING });

  try {
    const { status, message, data } = await makeApiRequest("get", "/note");

    if (status === 1) {
      dispatch({ type: GET_NOTES_SUCCESS, payload: data });
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: GET_NOTES_ERROR });
    }
  } catch (error) {
    dispatch({ type: GET_NOTES_ERROR });
  }
};

export const createNotes = (obj) => async (dispatch) => {
  dispatch({ type: CREATE_NOTES_LOADING });

  try {
    const { status, message } = await makeApiRequest("post", "/note/create", obj);

    if (status === 1) {
      dispatch({ type: CREATE_NOTES_SUCCESS });
      dispatch(getNotes());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: CREATE_NOTES_ERROR });
    }
  } catch (error) {
    dispatch({ type: CREATE_NOTES_ERROR });
  }
};

export const deleteNotes = (id) => async (dispatch) => {
  dispatch({ type: DELETE_NOTES_LOADING });

  try {
    const { status, message } = await makeApiRequest("delete", "/note/", null, { id });

    if (status === 1) {
      dispatch({ type: DELETE_NOTES_SUCCESS });
      dispatch(getNotes());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: DELETE_NOTES_ERROR });
    }
  } catch (error) {
    dispatch({ type: DELETE_NOTES_ERROR });
  }
};

export const updateNotes = (id, obj) => async (dispatch) => {
  dispatch({ type: UPDATE_NOTES_LOADING });

  try {
    const { status, message } = await makeApiRequest("patch", "/note", obj, { id });

    if (status === 1) {
      dispatch({ type: UPDATE_NOTES_SUCCESS });
      dispatch(getNotes());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: UPDATE_NOTES_ERROR });
    }
  } catch (error) {
    dispatch({ type: UPDATE_NOTES_ERROR });
  }
};
