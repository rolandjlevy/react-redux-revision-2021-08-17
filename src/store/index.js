import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/index';
import { createLogger } from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({ collapsed: true, level: 'info' });

const middleware = [thunk, logger];
const initialState = {};

// const devToolsExt = window.__REDUX_DEVTOOLS_EXTENSION__;
// second parameter of compose: devToolsExt && devToolsExt()

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export const storeNoDevToolsExt = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
);