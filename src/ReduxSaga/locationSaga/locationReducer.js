import { GET_CITY_FAILURE, GET_CITY_REQUEST, GET_CITY_SUCCESS, GET_COUNTRY_FAILURE, GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS, GET_STATE_FAILURE, GET_STATE_REQUEST, GET_STATE_SUCCESS } from "./locationAction"

const initialState = {
  loading:false,
  error:false,
  success:false,
  countryData:[],
  stateData:[],
  cityData:[],
  message:''
}

const locationReducer = (state = initialState, action) => {
  switch(action.type){
    // get all country
    case GET_COUNTRY_REQUEST:
      return{
        ...state,
        loading:true,
        success:false,
        error:false
      }
    case GET_COUNTRY_SUCCESS:
      return{
        ...state,
        loading:false,
        success:true,
        error:false,
        countryData:action.payload
      }
    case GET_COUNTRY_FAILURE:
      return{
        ...state,
        loading:false,
        error:true,
        success:false,
        message:action.payload
      } 
      // get all state
      case GET_STATE_REQUEST:
        return{
          ...state,
          loading:true,
          success:false,
          error:false
        }
      case GET_STATE_SUCCESS:
        return{
          ...state,
          loading:false,
          success:true,
          error:false,
          stateData:action.payload
        }
      case GET_STATE_FAILURE:
        return{
          ...state,
          loading:false,
          error:true,
          success:false,
          message:action.payload
        }
        // get all cities
        case GET_CITY_REQUEST:
        return{
          ...state,
          loading:true,
          success:false,
          error:false
        }
      case GET_CITY_SUCCESS:
        return{
          ...state,
          loading:false,
          success:true,
          error:false,
          cityData:action.payload
        }
      case GET_CITY_FAILURE:
        return{
          ...state,
          loading:false,
          error:true,
          success:false,
          message:action.payload
        }
    default:{
      return {
        ...state
      }
    }
  }
}

export default locationReducer