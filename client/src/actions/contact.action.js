import api from '../utils/api.util';
import { setAlert } from './alert.action';

export const sendMessage = (messageData) => async (dispatch) => {
  const body = JSON.stringify(messageData);
  try {
    console.log(body);
    const res = await api.post('/contact', body);
    console.log('this is the response', res.data);
    dispatch(setAlert(res.data));
  } catch (error) {
    console.error(error);
  }
};
