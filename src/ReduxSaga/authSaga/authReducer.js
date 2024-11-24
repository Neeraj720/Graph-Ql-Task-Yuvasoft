import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILURE,
} from "./authAction";

const initialState = {
  user: null,
  token: "",
  loading: false,
  error: null,
  success: false,
  userList:[],
  userData:{}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
      // get user list
      case GET_USER_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case GET_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          userList: action.payload.data,
        };
      case GET_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          success: false,
        };
        // get single user
        case GET_SINGLE_USER_REQUEST:
          return {
            ...state,
            loading: true,
            success: false,
            error: null,
          };
        case GET_SINGLE_USER_SUCCESS:
          return {
            ...state,
            loading: false,
            success: true,
            userData: action.payload,
          };
        case GET_SINGLE_USER_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
            success: false,
          };
    default:
      return state;
  }
};

export default authReducer;
