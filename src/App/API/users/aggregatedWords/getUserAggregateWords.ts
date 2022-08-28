import axios from 'axios';

import { BASE_URL } from '../../consts';
import { IWord } from '../../../types/interfaces';

export const getUserAggregateWords = async (userId: string): Promise<IWord> => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios.get(`${BASE_URL}users/${userId}/aggregatedWords`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res.data;
};
