import { combineReducers } from 'redux';
import auth from './auth.reducer';
import gallery from './gallery.reducer';

export default combineReducers({ auth, gallery });
