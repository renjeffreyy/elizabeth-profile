import { REMOVE_FROM_CART, ADD_TO_CART } from './types.action';
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

export const removeFromCart = () => (dispatch) => {};
