import { REMOVE_FROM_CART, ADD_TO_CART } from '../actions/types.action';

const initialState = {
  cart: [],
  total: '',
  tax: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem._id !== payload),
        total: '',
        tax: '',
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [state.cart, ...payload],
        total: '',
        tax: '',
      };
    default:
      return state;
  }
}
