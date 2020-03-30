import axios from "axios";
import { axiosWithAuth } from "./../utils/axiosWithAuth";

// Action type imports
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
  SIGNUP_FAIL,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAIL
} from "./../constants/ActionTypes";

// Login
// POST /api/auth/login
/* Request shape:
  username*
  password*
*/
export const login = (user, history) => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://lambda-anywhere-fitness.herokuapp.com/api/auth/login", user)
    .then(res => {
      // Store the token in local storage
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      // Redirect to the user page
      history.push(`/user/${res.data.user.id}`);
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err.response });
    });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
}

// Register new user
// POST /api/auth/register
/* Request shape:
  username*
  password*
  firstName
  lastName
  email
  roleId*
*/
export const register = (newUser, history) => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post("https://lambda-anywhere-fitness.herokuapp.com/api/auth/register", newUser)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      dispatch(login({username: newUser.username, password: newUser.password}, history));
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAIL, payload: err.response });
    });
};

// Delete category
// DELETE /api/category/:id
/* Request shape:
  id
*/

// Get all categories
// GET /api/category
/* Request shape: None */
export const getCategories = () => dispatch => {
  dispatch({ type: FETCH_CATEGORIES_START });
  axiosWithAuth()
    .get("/api/category")
    .then(res => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_CATEGORIES_FAIL, payload: err.response });
    });
};

// Add new category
// POST /api/category
/* Request shape:
  name*
  description
*/

// Update category
// PUT /api/category/:id
/* Request shape:
  id
  name*
  description
*/

// Delete class
// DELETE /api/classes/:id
/* Request shape:
  id
*/

// Get all classes
// GET /api/classes
/* Request shape: None */
export const getClasses = () => dispatch => {
  dispatch({ type: FETCH_CLASSES_START });
  axiosWithAuth()
    .get("/api/classes")
    .then(res => {
      dispatch({ type: FETCH_CLASSES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_CLASSES_FAIL, payload: err.response });
    });
};

// Add new class
// POST /api/classes
/* Request shape:
  title*
  instructorId*
  categoryId*
  scheduleTime
  address
  city
  state
  zipCode
*/

// Update a class
// PUT /api/classes/:id
/* Request shape:
  title*
  instructorId*
  categoryId*
  scheduleTime
  address
  city
  state
  zipCode
*/

// Update the current logged in user
// PUT /api/user
/* Request shape: 
  username
  password
  firstName
  lastName
  email
  roleId
*/

// Delete the current logged in user
// DELETE /api/user
/* Request shape: None */

// Sign up user for class
// POST /api/user/classes/:id
/* Request shape:
  id
*/
export const signupUserClass = id => dispatch => {
  dispatch({ type: SIGNUP_START })
  axiosWithAuth().post(`/api/user/classes/${id}`)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAIL, payload: err.response})
    })
}

// Remove user from the class
// DELETE /api/user/classes/:id
/* Request shape:
  id
*/
export const removeUserClass = id => dispatch => {
  dispatch({ type: DELETE_START })
  axiosWithAuth().delete(`/api/user/classes/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: id})
    })
    .catch(err => {
      dispatch({ type: DELETE_FAIL, payload: err.response})
    })
}

// Get all classes for the logged in user
// GET /api/user/classes
/* Request shape: None */

export const getUserClasses = (classes) => dispatch => {
  dispatch({ type: FETCH_USER_CLASSES_START })
  axiosWithAuth().get('/api/user/classes')
    .then(res => {
      const classObjs = [];
      res.data.forEach(classFromRes => {
        const classToFind = classes.find(classObj => Number(classObj.id) === Number(classFromRes.classId));
        classToFind && classObjs.push(classToFind);
      })
      dispatch({ type: FETCH_USER_CLASSES_SUCCESS, payload: classObjs })

    })
    .catch(err => {
      dispatch({ type: FETCH_USER_CLASSES_FAIL, payload: err.response })
    })
}