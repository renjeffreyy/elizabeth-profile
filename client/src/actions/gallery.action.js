import { ART_LOADED } from './types.action';
//for now using axios to make requests if making requests to api
//change to api in utils
import axios from 'axios';

export const loadArt = () => async (dispatch) => {
  try {
    const res = await axios.get('https://picsum.photos/v2/list');
    console.log(res);
    dispatch({ type: ART_LOADED, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
