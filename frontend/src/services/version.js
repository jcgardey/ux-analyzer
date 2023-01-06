import axios from '../axios';

export const getAllVersions = () => axios.get('/version');

