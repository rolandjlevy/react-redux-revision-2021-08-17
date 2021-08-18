import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/index';

import { createLogger } from 'redux-logger';
const logger = createLogger().default;

const middleware = [thunk];
const preloadedState = {};
const devToolsExt = window.__REDUX_DEVTOOLS_EXTENSION__;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
      applyMiddleware(...middleware)
  )
);

export default store;