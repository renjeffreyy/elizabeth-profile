import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'elizabeth',
  storage: storage,
  whitelist: ['cart'],
};

const initialState = {};

const middleware = [thunk];

const PersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  PersistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

export default { store, persistor };
