import axios from '../axios';

export const getAllUserSessionsOfVersion = (id) =>
  axios.get(`/version/${id}/user_sessions`);
