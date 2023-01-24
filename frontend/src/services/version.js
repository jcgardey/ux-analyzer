import axios from '../axios';

export const getEvaluationVersions = (evaluationId) =>
  axios.get(`/evaluation/${evaluationId}/version`);

export const createVersion = (evaluationId, name, urls) =>
  axios.post(`/evaluation/${evaluationId}/version/new`, { name, urls });

export const getVersion = (id) => axios.get(`/version/${id}`);

export const getVersionWidgets = (id) => axios.get(`/version/${id}/widgets`);

export const deleteVersion = (id) => axios.delete(`/version/${id}/delete`);

