import axios from 'axios';

import { BASE_URL } from '../../Base_url';

export const createUserWord = async (userId: string, wordId: string) => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios({
		method: 'post',
		url: `${BASE_URL}users/${userId}/words/${wordId}`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		// data: {
		// },
	});
	return res;
};