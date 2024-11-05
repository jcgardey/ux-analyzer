import { User } from '@/types/common';
import api from './api';

export const getLoggedUser = (): Promise<User> =>
    api.get('/user').then(response => response.data);

export const logout = () => api.post('/logout');

interface LoginParams {
    email: string;
    password: string;
}

interface LoginResponse {
    name: string;
    token: string;
}

export interface LoginError {
    email?: string;
    credentials?: string;
  }

export const login = (params: LoginParams): Promise<LoginResponse> =>
    api.post('/login', params).then(response => response.data);


interface SignUpParams {
    name: string;
    email: string;
    password: string;
    repeat_password: string
}

interface SignUpResponse {
    name: string;
    email: string;
}

export const signUpUser = (params: SignUpParams): Promise<SignUpResponse> => api.post('/user/new', params).then(response => response.data);