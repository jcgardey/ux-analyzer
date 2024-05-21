import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers['Authorization'] = `Token ${localStorage.getItem('token')}`;
  }
  return config;
});

export default instance;
