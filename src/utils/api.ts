import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://apinodemongodb.onrender.com',
});
