import axios from '../axios';

export const getEvaluationVersions = (evaluationId) =>
  axios.get(`/evaluation/${evaluationId}/version`);

export const createVersion = (evaluationId, name) =>
  axios.post(`/evaluation/${evaluationId}/version/new`, { name });

export const getVersion = (id) => axios.get(`/version/${id}`);

export const getVersionWidgets = (id) => axios.get(`/version/${id}/widgets`);

