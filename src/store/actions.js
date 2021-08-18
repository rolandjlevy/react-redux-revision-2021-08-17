import { 
  INC_COUNTER, 
  DEC_COUNTER, 
  GET_POSTS_SUCCESS, 
  GET_POSTS_ERROR
} from './actionTypes';

export const getPosts = (data) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: data
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