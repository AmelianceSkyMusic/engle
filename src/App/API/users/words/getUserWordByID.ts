import axios from 'axios';

import { BASE_URL } from '../../consts';
import { IUserWordWithId } from '../../../types/interfaces';

export const getUserWordByID = async (userId: string, wordId: string): Promise<IUserWordWithId> => {
	const token = `${localStorage.getItem('token')}`;
	const res = await axios.get(`${BASE_URL}users/${userId}/words/${wordId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res.data;
};
