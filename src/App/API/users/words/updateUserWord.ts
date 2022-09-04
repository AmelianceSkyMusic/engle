import axios from 'axios';

import { BASE_URL } from '../../consts';
import { IUserWord } from '../../../types/interfaces';

export const updateUserWord = async (
	userId: string,
	wordId: string,
	wordData: IUserWord,
): Promise<IUserWord> => {
	const token = `${localStorage.getItem('token')}`;
	console.log(wordData);
	const res = await axios({
		method: 'put',
		url: `${BASE_URL}users/${userId}/words/${wordId}`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		data: wordData,
	});
	console.log(res.data);
	return res.data;
};
