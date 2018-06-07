import axios from 'axios';

const ACTION_SIGNUP = 'SIGNUP';

const ROOT_URL = 'localhost:3000';

export function signup(email) {
  // Regex to put in apt name
  const request = axios.post(`${ROOT_URL}/users/signup`, {
    email
  });

  return {
    type: ACTION_SIGNUP,
    payload: request
  }
}
