import axios from '../axios';

export const getAllEvaluations = () => axios.get('/evaluation');

export const createEvaluation = (name) =>
  axios.post('/evaluation/new', { evaluation_name: name });

export const deleteEvaluation = (id) =>
  axios.delete(`/evaluation/${id}/delete`);

export const getEvaluation = (evaluationId) =>
  axios.get(`/evaluation/${evaluationId}`);
