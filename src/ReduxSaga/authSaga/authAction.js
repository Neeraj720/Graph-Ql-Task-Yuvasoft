// Login Request
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE";
// get all user request

export const GET_USER_REQUEST = "GET_USER_REQUEST"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_FAILURE = "GET_USER_FAILURE"

// get single user

export const GET_SINGLE_USER_REQUEST = "GET_SINGLE_USER_REQUEST"
export const GET_SINGLE_USER_SUCCESS = "GET_SINGLE_USER_SUCCESS"
export const GET_SINGLE_USER_FAILURE = "GET_SINGLE_USER_FAILURE"
// Login Actions

export const loginRequest = (data) => ({ type: LOGIN_REQUEST, payload: data });
export const loginSuccess = (data) => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload: data,
});
export const loginFailure = (error) => ({
  type: LOGIN_REQUEST_FAILURE,
  payload: error.message,
});

// get all user action

export const getUserRequset = (data) =>({
  type:GET_USER_REQUEST,
  payload:data
})
export const getUserSuccess = (data) =>({
  type:GET_USER_SUCCESS,
  payload:data
})
export const getUserFailure = (error) =>({
  type:GET_USER_FAILURE,
  payload:error.message
})

// View Single user
export const getSingleUserRequset = (data) =>({
  type:GET_SINGLE_USER_REQUEST,
  payload:data
})
export const getSingleUserSuccess = (data) =>({
  type:GET_SINGLE_USER_SUCCESS,
  payload:data
})
export const getSingleUserFailure = (error) =>({
  type:GET_SINGLE_USER_FAILURE,
  payload:error.message
})