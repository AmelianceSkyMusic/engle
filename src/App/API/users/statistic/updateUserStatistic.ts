import axios from 'axios';

import { BASE_URL } from '../../Base_url';

export const updateUserStatistics = async (userId: string, limit: number) => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios({
		method: 'put',
		url: `${BASE_URL}users/${userId}/statistics`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		data: {
			learnedWords: `${limit}`,
			optional: {},
		},
	});
	return res;
};
