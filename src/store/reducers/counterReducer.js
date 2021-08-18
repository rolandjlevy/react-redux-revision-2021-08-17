import { INC_COUNTER, DEC_COUNTER } from '../actionTypes';

const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNTER:
    return {
      ...state,
      count: state.count + 1
    }
    case DEC_COUNTER:
      return {
        ...state,
        count: state.count - 1
      }
    default: 
      return state;
  }
}

export default counterReducer;