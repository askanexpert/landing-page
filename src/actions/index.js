import axios from 'axios';
//import {dispatch} from 'redux-thunk';

export const ACTION_SIGNUP = 'SIGNUP';

const ROOT_URL = 'http://localhost:3000';

export function signup(email) {
  const request = axios.post(`${ROOT_URL}/leads`, {email});

  return (dispatch) => {
    request.then((data) => {
      console.log("DARA", data);
      dispatch({
        type: ACTION_SIGNUP,
        payload: data
      })
    });
  };
}
