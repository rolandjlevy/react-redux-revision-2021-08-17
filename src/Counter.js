import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/actions';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
        +
        </button>
      <button
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
        -
        </button>
        Counter: {count}
    </div>
  )
}

export default Counter;