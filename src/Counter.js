import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/actions';

const Counter = () => {
  const count = useSelector(state => {
    return state.counterReducer.count;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
        -
        </button>
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
        +
        </button>
    </div>
  )
}

export default Counter;