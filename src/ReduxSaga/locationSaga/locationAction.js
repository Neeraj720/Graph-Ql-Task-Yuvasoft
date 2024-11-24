// get all country
export const GET_COUNTRY_REQUEST = "GET_COUNTRY_REQUEST"
export const GET_COUNTRY_SUCCESS = "GET_COUNTRY_SUCCESS"
export const GET_COUNTRY_FAILURE = "GET_COUNTRY_FAILURE"

// get all state
export const GET_STATE_REQUEST = "GET_STATE_REQUEST"
export const GET_STATE_SUCCESS = "GET_STATE_SUCCESS"
export const GET_STATE_FAILURE = "GET_STATE_FAILURE"

// get all city
export const GET_CITY_REQUEST = "GET_CITY_REQUEST"
export const GET_CITY_SUCCESS = "GET_CITY_SUCCESS"
export const GET_CITY_FAILURE = "GET_CITY_FAILURE"

// get all country
export const getCountryRequest = () => ({ type: GET_COUNTRY_REQUEST })
export const getCountrySUCCESS = (data) => ({ type: GET_COUNTRY_SUCCESS, payload: data })
export const getCountryFAILURE = (error) => ({ type: GET_COUNTRY_FAILURE, payload: error.message })

// get all state

export const getStateRequest = (data) => ({ type: GET_STATE_REQUEST,payload:data })
export const getStateSUCCESS = (data) => ({ type: GET_STATE_SUCCESS, payload: data })
export const getStateFAILURE = (error) => ({ type: GET_STATE_FAILURE, payload: error.message })

// get all cities

export const getCityRequest = (data) => ({ type: GET_CITY_REQUEST,payload:data })
export const getCitySUCCESS = (data) => ({ type: GET_CITY_SUCCESS, payload: data })
export const getCityFAILURE = (error) => ({ type: GET_CITY_FAILURE, payload: error.message })