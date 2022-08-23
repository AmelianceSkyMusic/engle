import axios from 'axios';

import { BASE_URL } from '../../Base_url';

export const deleteUserWord = async (userId: string, wordId: string):Promise<string> => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios({
		method: 'delete',
		url: `${BASE_URL}users/${userId}/words/${wordId}`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	return res.data;
};
