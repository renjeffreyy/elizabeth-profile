import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
} from './types.action';
import { setAlert } from './alert.action';
import api from '../utils/api.util';

export const addToCart = (art) => (dispatch) => {
  try {
    console.log(art);
    dispatch({ type: ADD_TO_CART, payload: art });
  } catch (error) {
    console.error(error);
    dispatch(setAlert({ msg: 'something went wrong', variant: 'danger' }));
  }
};

export const removeOneFromCart = (art) => (dispatch) => {
  try {
    console.log(art);
    dispatch({ type: REMOVE_ONE_FROM_CART, payload: art });
  } catch (error) {
    console.error(error);
    dispatch(setAlert({ msg: 'something went wrong', variant: 'danger' }));
  }
};

export const removeFromCart = (url) => (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_CART, payload: url });
  } catch (error) {
    dispatch(setAlert({ msg: 'something went wrong', variant: 'danger' }));
    console.error(error);
  }
};

export const makePayment = (paymentData) => (dispatch) => {
  try {
    const body = JSON.stringify(paymentData);
    const res = api.post('/checkout', body);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
