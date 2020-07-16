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
    case ADD_TO_CART:
    default:
      return state;
  }
}
