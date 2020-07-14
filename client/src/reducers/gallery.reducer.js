import { ART_LOADED } from '../actions/types.action';

const initialState = {
  art: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ART_LOADED:
      return {
        ...state,
        art: [...payload],
      };
    default:
      return state;
  }
}
