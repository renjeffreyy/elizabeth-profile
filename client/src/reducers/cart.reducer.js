import { REMOVE_FROM_CART, ADD_TO_CART } from '../actions/types.action';

const initialState = {
  cart: [],
  total: '',
  tax: '',
};

const calcTotalPrice = (array, newItem) => {
  const totalWithNewItem = [...array, newItem];
  return totalWithNewItem.reduce(
    (accum, current) => accum + current.quantity * current.price,
    0
  );
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
      const existingCartItem = state.cart.find(
        (cartItem) => cartItem.url === payload.url
      );
      if (existingCartItem) {
        const arrayWithAddedQuantitites = state.cart.map((cartItem) => {
          return cartItem.url === payload.url
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        });

        return {
          ...state,
          cart: [...arrayWithAddedQuantitites],
          total: calcTotalPrice(state.cart, payload),
          tax: '',
        };
      }
      return {
        ...state,
        cart: [...state.cart, payload],
        total: calcTotalPrice(state.cart, payload),
        tax: '',
      };
    default:
      return state;
  }
}
