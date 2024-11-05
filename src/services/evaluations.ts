import { Evaluation, FullEvaluation } from '@/types/common';
import api from './api';

export const getAllEvaluations = (): Promise<Evaluation[]> =>
  api.get('/evaluation').then((response) => response.data);

interface CreateEvaluationParams {
  evaluation_name: string;
}

export const createEvaluation = (
  params: CreateEvaluationParams
): Promise<Evaluation> =>
  api.post('/evaluation/new', params).then((response) => response.data);

export const deleteEvaluation = (id: number): Promise<Evaluation> =>
  api.delete(`/evaluation/${id}/delete`).then((response) => response.data);

export const getEvaluationById = (id: string): Promise<FullEvaluation> =>
  api.get(`/evaluation/${id}`).then((response) => response.data);
