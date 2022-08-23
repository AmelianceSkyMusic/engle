import axios from 'axios';

import { BASE_URL } from '../../Base_url';

export const getUserAggregateWords = async (userId: string) => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios.get(`${BASE_URL}users/${userId}/aggregatedWords`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	console.log(res);
	return res;
};
