import axios from '../axios';

export const createVersion = (evaluationId, name, urls) =>
  axios.post(`/evaluation/${evaluationId}/version/new`, { name, urls });

export const getVersion = (id) => axios.get(`/version/${id}`);

export const getVersionWidgets = (id) => axios.get(`/version/${id}/widgets`);

export const deleteVersion = (id) => axios.delete(`/version/${id}/delete`);

export const updateWidgetsSettings = (id, widgets) =>
  axios.post(`/version/${id}/widgets/settings`, { widgets });
