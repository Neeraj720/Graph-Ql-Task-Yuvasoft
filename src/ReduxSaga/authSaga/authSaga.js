import { call, put, takeLatest } from "redux-saga/effects";
import client from "../apollo/client";
import { LOGIN_REQUEST, loginSuccess, loginFailure, GET_USER_REQUEST, getUserSuccess, getUserFailure, GET_SINGLE_USER_REQUEST, getSingleUserSuccess, getSingleUserFailure } from "./authAction";
import { getSingleUser, getUser, userLogin } from "./authService";

function* loginSaga(action) {
  try {
    const response = yield call(client.mutate, {
      mutation: userLogin,
      variables: action.payload,
    });
    console.log("response :" , response)
    yield put(loginSuccess(response.data.login));
    localStorage.setItem("token", response.data.login.token);
  } catch (error) {
    yield put(loginFailure(error)); 
    console.error("Login Saga Error:", error.message);
  }
}

// get user list saga

function* getUserList(action) {
  try{
    const response = yield call(client.query,{
      query:getUser,
      variables:action.payload
    })
    console.log(response,"user list")
    yield put(getUserSuccess(response.data.users))
  }
  catch(error){
    yield put(getUserFailure(error))
    console.log("User list error :",error.message)
  }
}

function* getuserData(action){
  try{
    console.log("action" , action.payload)
    const response = yield call(client.query,{
      query:getSingleUser,
      variables:action.payload
    })
    console.log(response,"user Data")
    yield put(getSingleUserSuccess(response.data.user))
  }
  catch(error){
    yield put(getSingleUserFailure(error))
    console.log("User list error :",error.message)
  }
}
export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(GET_USER_REQUEST, getUserList);
  yield takeLatest(GET_SINGLE_USER_REQUEST, getuserData);
}
