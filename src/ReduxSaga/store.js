import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./combineReducer";
import rootSaga from "./rootSaga";
const sagaMiddelWare = createSagaMiddleware()
const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({thunk:false}).concat(sagaMiddelWare)
})
sagaMiddelWare.run(rootSaga)
export default store