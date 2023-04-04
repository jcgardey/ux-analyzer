import axios from '../axios';

export const login = (email, password) =>
  axios.post('/login', { email, password });

export const getLoggedUser = () => axios.get('/user');
