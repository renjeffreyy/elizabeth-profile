import { LOGIN_SUCCESS, USER_LOADED, AUTH_ERROR, LOGOUT } from './types.action';
import api from '../utils/api.util';
import setAuthToken from '../utils/set-auth-token.util';

// load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const response = await api.get('/auth');
    console.log(response, 'this is loaduser');
    dispatch({
      type: USER_LOADED,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const loginUser = (authData) => async (dispatch) => {
  const body = JSON.stringify(authData);
  try {
    const res = await api.post('/auth', body);

    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    dispatch(loadUser());
  } catch (error) {
    console.error(error);
  }
};

//logout
export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
