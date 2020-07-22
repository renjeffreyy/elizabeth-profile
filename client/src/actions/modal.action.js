import { SHOW_MODAL, HIDE_MODAL } from '../actions/types.action';

export const showModal = (artData) => (dispatch) => {
  dispatch({ type: SHOW_MODAL, payload: artData });
};

export const hideModal = () => (dispatch) => {
  dispatch({ type: HIDE_MODAL });
};
