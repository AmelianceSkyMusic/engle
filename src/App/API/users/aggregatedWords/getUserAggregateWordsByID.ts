import axios from 'axios';

import { BASE_URL } from '../../consts';
import { IUserWord } from '../../../types/interfaces';

export const getUserAggWordsByID = async (userId: string, wordId: string): Promise<IUserWord> => {
	const token = `${localStorage.getItem('token')}`;
	const res = await axios.get(`${BASE_URL}users/${userId}/aggregatedWords/${wordId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res.data;
};
