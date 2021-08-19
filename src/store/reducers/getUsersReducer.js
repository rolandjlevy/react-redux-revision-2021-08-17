import {
  FETCH_USERS_REQUEST, 
  FETCH_USERS_SUCCESS, 
  FETCH_USERS_ERROR
} from '../actionTypes';

const initialState = {
  users: [],
  isLoading: false,
  error: ''
}

const getUsersReducer = (state = initialState, action) => {
  console.log('=== getUsersReducer')
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_USERS_SUCCESS:
      console.log('FETCH_USERS_SUCCESS', action.payload);
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    case FETCH_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default getUsersReducer;