import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import getUsersReducer from './getUsersReducer';

export default combineReducers({
  counterReducer,
  getUsersReducer
});