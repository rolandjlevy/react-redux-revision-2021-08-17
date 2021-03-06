import {
  FETCH_USERS_REQUEST, 
  FETCH_USERS_SUCCESS, 
  FETCH_USERS_ERROR
} from '../actionTypes';

const initialState = {
  users: [],
  isLoading: false
}

const getPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}

export default getPostsReducer;

// const url = 'https://jsonplaceholder.typicode.com/users';