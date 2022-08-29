import axios from 'axios';

import { BASE_URL } from '../../consts';
import { IUserWord } from '../../../types/interfaces';

export const getUserWords = async (userId: string): Promise<IUserWord[]> => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios.get(`${BASE_URL}users/${userId}/words`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res.data;
};
