// enable commented out sections for development use

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducer/reducer.js';
import reporter from './middleware/reporter.js';

import thunk from 'redux-thunk';

let reducers = combineReducers({
  main: mainReducer,
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk, reporter)));

export default store;
