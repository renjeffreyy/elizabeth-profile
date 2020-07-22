import { ART_LOADED, DELETE_ART } from '../actions/types.action';

const initialState = {
  art: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case DELETE_ART:
      return {
        ...state,
        art: state.art.filter((artItems) => artItems._id !== payload),
      };
    case ART_LOADED:
      return {
        ...state,
        art: [...payload],
      };
    default:
      return state;
  }
}
