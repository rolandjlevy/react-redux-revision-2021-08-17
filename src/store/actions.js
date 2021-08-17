import { INC_COUNTER, DEC_COUNTER } from './actionTypes';

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