import { call, put, takeLatest } from "redux-saga/effects"
import client from "../apollo/client"
import { getCityList, getCuntryList, getStateList } from "./locationService"
import { GET_CITY_REQUEST, GET_COUNTRY_REQUEST, GET_STATE_REQUEST, getCityFAILURE, getCitySUCCESS, getCountryFAILURE, getCountrySUCCESS, getStateFAILURE, getStateSUCCESS } from "./locationAction"

// county saga
function* getCountryData(){
  try{
    const response = yield call(client.query,{
      query:getCuntryList
    })
    // console.log("country data:" , response)
    yield put(getCountrySUCCESS(response.data.countries))
  }
  catch(error){
    console.log("error",error)
    yield put(getCountryFAILURE(error))
  }
}

// state saga

function* getStateData(action){
  try{
    const response = yield call(client.query,{
      query:getStateList,
      variables:action.payload
    })
    console.log(response,"response state data")
    yield put(getStateSUCCESS(response.data.states))
  }
  catch(error){
    console.log("error:" , error)
    yield put(getStateFAILURE(error))
  }
}
// get all ciities
function* getCityData(action){
  try{
    const response = yield call(client.query,{
      query:getCityList,
      variables:action.payload
    })
    console.log(response ,"response city data")
    yield put(getCitySUCCESS(response.data.cities))
  }
  catch(error){
    console.log("error" , error)
    yield put(getCityFAILURE(error))
  }
}


export default function* locationSaga(){
  yield takeLatest(GET_COUNTRY_REQUEST,getCountryData)
  yield takeLatest(GET_STATE_REQUEST,getStateData)
  yield takeLatest(GET_CITY_REQUEST,getCityData)
}