import axios from 'axios';

import { BASE_URL } from '../Base_url';

export const getNewUserToken = async (userId: string, refreshToken: string) => {
	const res = await axios.get(`${BASE_URL}users/${userId}/tokens`, {
		headers: {
			Authorization: `Bearer ${refreshToken}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res;
};
