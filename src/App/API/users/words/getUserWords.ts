import axios from 'axios';

import { BASE_URL } from '../../Base_url';

export const getUserWords = async (userId: string) => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios.get(`${BASE_URL}users/${userId}/words`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res;
};
