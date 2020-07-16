import { SET_ALERT, REMOVE_ALERT } from './types.action';

//ser alert
export const setAlert = (alert) => (dispatch) => {
  try {
    //set alert to response from server
    dispatch({ type: SET_ALERT, payload: alert });

    //after 5 seconds remove alert
    setTimeout(() => dispatch(removeAlert(alert)), 5000);
  } catch (error) {
    console.error(error);
  }
};

export const removeAlert = (alert) => (dispatch) => {
  try {
    dispatch({ type: REMOVE_ALERT, payload: alert });
  } catch (error) {
    console.error(error);
  }
};
