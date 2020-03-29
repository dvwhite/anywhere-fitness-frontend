// Action type constants
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  FETCH_CLASSES_START,
  FETCH_CLASSES_SUCCESS,
  FETCH_CLASSES_FAIL,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL,
  FETCH_USER_CLASSES_START,
  FETCH_USER_CLASSES_SUCCESS,
  FETCH_USER_CLASSES_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../constants/ActionTypes";

// Initial app state for the reducer
const initialState = {
  categories: [],
  classes: [],
  instructors: [],
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
    classes: [],
    classIds: []
  },
  error: {},
  isFetching: false
};

// The main reducer for the fitness app
export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
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
    // Logout
    case LOGOUT:
      return {
        ...initialState
      };
    // Registration
    case REGISTER_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    // Get all categories
    case FETCH_CATEGORIES_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isFetching: false
      };
    case FETCH_CATEGORIES_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    // Get all classes
    case FETCH_CLASSES_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        classes: action.payload,
        isFetching: false
      };
    case FETCH_CLASSES_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case FETCH_USER_CLASSES_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_USER_CLASSES_SUCCESS:
      return {
        ...state,
        user: { ...state.user, classes: action.payload },
        isFetching: false
      };
    case FETCH_USER_CLASSES_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case SIGNUP_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          classIds: [
            ...state.user.classIds,
            action.payload.filter(
              classObj => !state.user.classIds.includes(classObj.id)
            ).classId
          ]
        }
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
