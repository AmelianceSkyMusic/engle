import axios from 'axios';

import { BASE_URL } from '../../Base_url';
import { IUserWord } from '../../../interfaces/interfaces';

export const getUserAggWordsByID = async (userId: string, wordId: string):Promise<IUserWord> => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios.get(`${BASE_URL}users/${userId}/aggregatedWords/${wordId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res.data;
};
