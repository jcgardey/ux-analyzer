import {
  UserSession,
  Version,
  VersionWithUserSessions,
  Widget,
} from '@/types/common';
import api, { SuccessResponse } from './api';

interface CreateVersionParams {
  evaluationId: string;
  name: string;
  urls: string[];
}

interface UpdateWidgetsSettingsParams {
  versionId: number;
  widgets: Widget[];
}

interface RefreshUserInteractionEffortParams {
  versionId: number;
}

export const createVersion = (params: CreateVersionParams): Promise<Version> =>
  api.post(`/evaluation/${params.evaluationId}/version/new`, {
    name: params.name,
    urls: params.urls,
  });

export const deleteVersion = (id: number): Promise<Version> =>
  api.delete(`/version/${id}/delete`).then((response) => response.data);

export const getVersionById = (id: number): Promise<Version> =>
  api.get(`/version/${id}`).then((response) => response.data);

export const getVersionUserSessions = (id: string): Promise<UserSession[]> =>
  api.get(`/version/${id}/user_sessions`).then((response) => response.data);

export const getVersionWidgets = (id: string): Promise<Widget[]> =>
  api.get(`/version/${id}/widgets`).then((response) => response.data);

export const updateWidgetsSettings = (
  params: UpdateWidgetsSettingsParams
): Promise<SuccessResponse> =>
  api.post(`/version/${params.versionId}/widgets/settings`, {
    widgets: params.widgets,
  });

export const refreshUserInteractionEffort = (
  params: RefreshUserInteractionEffortParams
): Promise<Version> =>
  api
    .post(`/version/${params.versionId}/refresh_user_interaction_effort`)
    .then((response) => response.data);

export const exportVersion = (versionId: number): Promise<Blob> =>
  api
    .get(`/version/${versionId}/export`, { responseType: 'blob' })
    .then((response) => response.data);
