import axios from 'axios';

import { BASE_URL } from '../Base_url';

export const createNewUser = async () => {
	const res = await axios.post(`${BASE_URL}users`, {
		name: 'Denis',
		email: 'denis@gmail.com',
		password: '12345678',
	});
	return res;
};
