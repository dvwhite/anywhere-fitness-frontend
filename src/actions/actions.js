import axios from "axios";
import { axiosWithAuth } from "./../utils";

// Action type imports
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  FETCH_CLASSES_START,
  FETCH_CLASSES_SUCCESS,
  FETCH_CLASSES_FAIL,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL
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
    .post("/api/auth/login", user)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      history.push(`/user/${res.data.id}`);
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err.response });
    });
};

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
    .post("/api/auth/register", newUser)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      history.push(`/login`);
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

// Remove user from the class
// DELETE /api/user/classes/:id
/* Request shape:
  id
*/
