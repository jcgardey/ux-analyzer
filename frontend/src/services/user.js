import axios from '../axios';

export const login = (username, passowrd) =>
  axios.post('/login', { username, passowrd });
