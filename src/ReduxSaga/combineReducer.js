import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSaga/authReducer";
import locationReducer from './locationSaga/locationReducer'
const rootReducer = combineReducers({
  auth: authReducer,
  location:locationReducer
});
export default rootReducer;
