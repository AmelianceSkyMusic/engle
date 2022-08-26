import axios from 'axios';

import { BASE_URL } from '../../consts';
import { ISetting } from '../../../types/interfaces';

export const getUserSettings = async (userId: string):Promise<ISetting> => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios.get(`${BASE_URL}users/${userId}/settings`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res.data;
};
