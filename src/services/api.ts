import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers['Authorization'] = `Token ${localStorage.getItem('token')}`;
  }
  return config;
});

export interface SuccessResponse {
  status: string;
}

export default instance;
