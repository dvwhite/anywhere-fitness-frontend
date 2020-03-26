// import actions here

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../constants/ActionTypes";

const initialState = {
  categories: [],
  classes: [],
  message: "",
  user: {
    id: 0,
    firstName: null,
    lastName: null,
    email: null,
    username: "",
    created_at: "",
    updated_at: "",
    roleId: 1,
    classes: []
  },
  error: {},
  isFetching: false
};

// The main reducer for the fitness app

export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        user: action.payload.user,
        isFetching: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
