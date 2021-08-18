import { INC_COUNTER, DEC_COUNTER } from '../actionTypes';

const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNTER:
    const obj = {
        ...state,
        count: state.count + 1
      }
    console.log({INC_COUNTER, obj});
      return obj
    case DEC_COUNTER:
    console.log({DEC_COUNTER});
      return {
        ...state,
        count: state.count - 1
      }
    default: 
      return state;
  }
}

export default counterReducer;