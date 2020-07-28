import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
} from '../actions/types.action';

const initialState = {
  cart: [],
  total: '',
  tax: '',
};

const calcTotalPrice = (array, newItem = null) => {
  //if no second argument is passed into calculating new price,
  //will recalculate the price with current cart items

  if (newItem === null) {
    const totalWithItemRemoved = [...array];
    return totalWithItemRemoved.reduce(
      (accum, current) => accum + current.quantity * current.price,
      0
    );
  }
  const totalWithNewItem = [...array, newItem];
  return totalWithNewItem.reduce(
    (accum, current) => accum + current.quantity * current.price,
    0
  );
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REMOVE_ONE_FROM_CART:
      const arrayWithRemovedQuantitites = state.cart.map((cartItem) => {
        return cartItem.url === payload.url
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem;
      });
      return {
        ...state,
        cart: [...arrayWithRemovedQuantitites],
        total: calcTotalPrice(arrayWithRemovedQuantitites),
      };
    case REMOVE_FROM_CART:
      const newCartAfterRemoval = state.cart.filter(
        (cartItem) => cartItem.url !== payload
      );
      return {
        ...state,
        cart: newCartAfterRemoval,
        total: calcTotalPrice(newCartAfterRemoval),
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
