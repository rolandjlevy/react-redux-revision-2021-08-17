import { 
  INC_COUNTER, 
  DEC_COUNTER, 
  FETCH_USERS_REQUEST, 
  FETCH_USERS_SUCCESS, 
  FETCH_USERS_ERROR
} from './actionTypes';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data
  }
}

export const fetchUsersError = (msg) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: msg
  }
}

export const increment = () => {
  return {
    type: INC_COUNTER
  }
}

export const decrement = () => {
  return {
    type: DEC_COUNTER
  }
}