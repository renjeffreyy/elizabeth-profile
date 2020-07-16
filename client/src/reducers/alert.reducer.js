import { SET_ALERT, REMOVE_ALERT } from '../actions/types.action';

const initialState = {
  alerts: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, payload],
      };
    case REMOVE_ALERT:
      state.alerts.splice(state.alerts.indexOf(payload), 1);
      return {
        ...state,
        alerts: [...state.alerts],
      };
    default:
      return state;
  }
}
