import axios from 'axios';

import { BASE_URL } from '../../consts';
import { IUserWord } from '../../../interfaces/interfaces';

export const updateUserWord = async (userId: string, wordId: string):Promise<IUserWord> => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios({
		method: 'put',
		url: `${BASE_URL}users/${userId}/words/${wordId}`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		// data: {
		// },
	});
	return res.data;
};
