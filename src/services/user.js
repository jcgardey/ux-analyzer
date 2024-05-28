import axios from '../axios';

export const login = (email, password) =>
  axios.post('/login', { email, password });

export const signUpUser = (userData) =>
  axios.post('/user/new', userData).then((response) => response.data);

export const getLoggedUser = () => axios.get('/user');

export const logout = () => axios.post('/logout');
