import { createStore, applyMiddleware } from 'redux';
import { composeWithDevtools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.reducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevtools(applyMiddleware(...middleware))
);

export default store;
