import axios from 'axios';

import { BASE_URL } from '../../Base_url';

export const getUserAggregateWordsByID = async (userId: string, wordId: string) => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios.get(`${BASE_URL}users/${userId}/aggregatedWords/${wordId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res;
};
