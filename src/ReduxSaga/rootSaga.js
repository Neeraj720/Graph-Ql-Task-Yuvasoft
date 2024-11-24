import { all } from "redux-saga/effects";
import authSaga from "./authSaga/authSaga";
import locationSaga from "./locationSaga/locationSaga";
function* rootSaga(){
    yield all([authSaga(),locationSaga()])
}
export default rootSaga