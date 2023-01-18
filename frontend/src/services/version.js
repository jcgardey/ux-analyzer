import axios from '../axios';

export const getAllVersions = () => axios.get('/version');

export const createVersion = (name) => axios.post('/version/new', { name });

export const getVersion = (id) => axios.get(`/version/${id}`);

export const getVersionWidgets = (id) => axios.get(`/version/${id}/widgets`);

