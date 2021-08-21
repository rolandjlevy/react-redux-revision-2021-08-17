import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/index';

import { createLogger } from 'redux-logger';
const logger = createLogger({ collapsed: true, level: 'info' });

const middleware = [thunk, logger];
const initialState = {};
const devToolsExt = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    devToolsExt && devToolsExt()
  )
);

export default store;