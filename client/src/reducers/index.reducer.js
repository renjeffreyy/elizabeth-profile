import { combineReducers } from 'redux';
import auth from './auth.reducer';
import gallery from './gallery.reducer';
import alert from './alert.reducer';
import cart from './cart.reducer';
import modal from './modal.reducer';

export default combineReducers({ auth, gallery, alert, cart, modal });
