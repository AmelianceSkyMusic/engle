import axios from 'axios';

import { BASE_URL } from '../Base_url';

export const updateUser = async (userId: string, mail: string, pass: string, token: string) => {
	const res = await axios({
		method: 'put',
		url: `${BASE_URL}users/${userId}`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		data: {
			email: `${mail}`,
			password: `${pass}`,
		},
	});
	return res;
};
