import axios from 'axios';

import { BASE_URL } from '../../Base_url';

export const getUserStatistics = async (userId: string) => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios.get(`${BASE_URL}users/${userId}/statistics`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res;
};
