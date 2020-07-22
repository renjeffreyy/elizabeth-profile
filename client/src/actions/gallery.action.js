import { ART_LOADED, DELETE_ART } from './types.action';
//for now using axios to make requests if making requests to api
//change to api in utils
import { setAlert } from './alert.action';
// import axios from 'axios';
import api from '../utils/api.util';

export const loadArt = () => async (dispatch) => {
  try {
    // const res = await axios.get('https://picsum.photos/v2/list');
    const res = await api.get('/art');
    console.log(res);
    dispatch({ type: ART_LOADED, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const uploadArt = (artData) => async (dispatch) => {
  try {
    const body = JSON.stringify(artData);
    const res = await api.post('/art', body);
    dispatch(setAlert({ msg: res.data.msg, variant: 'success' }));
  } catch (error) {
    console.log(error);
    const err = error.response.data.errors;
    if (err) {
      err.forEach((err) => {
        dispatch(setAlert({ msg: err.msg, variant: 'danger' }));
        console.log(err);
      });
    }
  }
};

export const deleteArt = (id) => async (dispatch) => {
  try {
    await api.delete(`/art/${id}`);

    dispatch({
      type: DELETE_ART,
      payload: id,
    });

    dispatch(setAlert({ msg: 'Removed Successfully', variant: 'success' }));
  } catch (error) {
    console.error(error);
  }
};
