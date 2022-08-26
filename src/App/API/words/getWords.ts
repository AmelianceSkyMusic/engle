import axios from 'axios';

import { BASE_URL } from '../consts';
import { IWord } from '../../types/interfaces';

export const getWords = async (groupNumber: number, pageNumber: number):Promise<IWord[]> => {
	const res = await axios.get(`${BASE_URL}words?group=${groupNumber}&page=${pageNumber}`, {
		headers: {
			Accept: 'application/json',
		},
	});
	return res.data;
};
