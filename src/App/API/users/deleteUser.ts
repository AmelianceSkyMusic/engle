import axios from 'axios';

import { BASE_URL } from '../Base_url';

export const deleteUser = async (userId: string, token: string):Promise<string> => {
	const res = await axios({
		method: 'delete',
		url: `${BASE_URL}users/${userId}`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	return res.data;
};
