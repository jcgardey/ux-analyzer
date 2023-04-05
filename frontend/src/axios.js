import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8002/api',
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers['Authorization'] = `Token ${localStorage.getItem('token')}`;
  }
  return config;
});

export default instance;
