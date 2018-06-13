import axios from 'axios';
import * as CONFIG_VARS from '../config/config';

export const ACTION_SIGNUP = 'SIGNUP';

export function signup(email) {
  const request = axios.post(
    `${CONFIG_VARS.ROOT_SERVER_URL}/leads`, {email});

  return (dispatch) => {
    request.then((data) => {
      dispatch({
        type: ACTION_SIGNUP,
        payload: data
      })
    });
  };
}
