import api from '../utils/api.util';

export const sendMessage = (messageData) => async (dispatch) => {
  const body = JSON.stringify(messageData);
  try {
    console.log(body);
    const res = await api.post('/contact', body);

    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
