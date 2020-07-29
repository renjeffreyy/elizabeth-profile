import { SHOW_MODAL, HIDE_MODAL } from '../actions/types.action';

const initialState = {
  displayModal: false,
  modalData: {
    id: '',
    url: '',
    title: '',
    price: '',
    description: '',
  },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        displayModal: true,
        modalData: {
          id: payload._id,
          url: payload.url,
          title: payload.artName,
          price: payload.price,
          description: payload.artDescription,
        },
      };
    case HIDE_MODAL:
      return {
        displayModal: false,
        modalData: {
          id: '',
          url: '',
          title: '',
          price: '',
          description: '',
        },
      };
    default:
      return state;
  }
}
