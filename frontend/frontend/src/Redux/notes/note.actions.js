
import { CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, DELETE_NOTES_ERROR, DELETE_NOTES_LOADING, DELETE_NOTES_SUCCESS, GET_NOTES_ERROR, GET_NOTES_LOADING, GET_NOTES_SUCCESS, UPDATE_NOTES_ERROR, UPDATE_NOTES_LOADING, UPDATE_NOTES_SUCCESS } from "./note.types"
import axios from "axios"
import { useSelector } from "react-redux";
import { BASE_URL } from "../../constants/config"
import {store} from "../store"

const {token} = store.getState().userReducer

export const getNotes = () => async (dispatch) => {
    dispatch({ type: GET_NOTES_LOADING });
    try {
      const res = await axios.get(BASE_URL + "/note", {
        headers: {
          Authorization: token,
        },
      });
  
      const { status, data } = res.data;
  
      if (status === 1) {
        dispatch({ type: GET_NOTES_SUCCESS, payload: data });
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
      const res = await axios.post(BASE_URL + "/note/create", obj, {
        headers: {
          Authorization: token,
        },
      });
  
      const { status } = res.data;
  
      if (status === 1) {
        dispatch({ type: CREATE_NOTES_SUCCESS });
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
      const res = await axios.delete(BASE_URL + `/note/${id}`, {
        headers: {
          Authorization: token,
        },
      });
  
      const { status, data } = res.data;
  
      if (status === 1) {
        dispatch({ type: DELETE_NOTES_SUCCESS, payload: data });
      } else {
        dispatch({ type: DELETE_NOTES_ERROR });
      }
    } catch (error) {
      dispatch({ type: DELETE_NOTES_ERROR });
    }
  };
  
  


  export const updatesNotes = (id) => async (dispatch) => {
    dispatch({ type: UPDATE_NOTES_LOADING });
    try {
      const res = await axios.patch(
        BASE_URL + `/note/${id}`,
        { obj: "your_obj_data" }, // Replace "your_obj_data" with the actual data you want to update
        {
          headers: {
            Authorization: token,
          },
        }
      );
  
      const { status, data } = res.data;
  
      if (status === 1) {
        dispatch({ type: UPDATE_NOTES_SUCCESS, payload: data });
      } else {
        dispatch({ type: UPDATE_NOTES_ERROR });
      }
    } catch (error) {
      dispatch({ type: UPDATE_NOTES_ERROR });
    }
  };
  
  