import axios from 'axios';

import { BASE_URL } from '../Base_url';
import { IWord } from '../../interfaces/interfaces';

export const getWords = async (groupCount: number, pageCount: number):Promise<IWord[]> => {
	const res = await axios.get(`${BASE_URL}words?group=${groupCount}&page=${pageCount}`, {
		headers: {
			Accept: 'application/json',
		},
	});
	return res.data;
};
