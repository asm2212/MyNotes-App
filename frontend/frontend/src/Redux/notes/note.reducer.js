import {
    CREATE_NOTES_LOADING,
    CREATE_NOTES_ERROR,
    CREATE_NOTES_SUCCESS,
    GET_NOTES_LOADING,
    GET_NOTES_SUCCESS,
    GET_NOTES_ERROR,
    UPDATE_NOTES_LOADING,
    UPDATE_NOTES_SUCCESS,
    UPDATE_NOTES_ERROR,
    DELETE_NOTES_LOADING,
    DELETE_NOTES_SUCCESS,
    DELETE_NOTES_ERROR,
  } from "./note.types";
  
  let initialState = {
    loading: false,
    error: false,
    data: [],
  };
  
  export const noteReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_NOTES_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case GET_NOTES_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
  
      case GET_NOTES_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      case CREATE_NOTES_LOADING:
      case UPDATE_NOTES_LOADING:
      case DELETE_NOTES_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case CREATE_NOTES_SUCCESS:
      case UPDATE_NOTES_SUCCESS:
      case DELETE_NOTES_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
  
      case CREATE_NOTES_ERROR:
      case UPDATE_NOTES_ERROR:
      case DELETE_NOTES_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return state;
    }
  };
//export default notesReducer;