import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
} from './types.action';
import { setAlert } from './alert.action';

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
