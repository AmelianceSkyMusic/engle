import axios from 'axios';

import { BASE_URL } from '../../consts';
import { ISetting } from '../../../types/interfaces';

export const updateUserSettings = async (userId: string, limit: number):Promise<ISetting> => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios({
		method: 'put',
		url: `${BASE_URL}users/${userId}/settings`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		data: {
			wordsPerDay: `${limit}`,
			optional: {},
		},
	});
	return res.data;
};
