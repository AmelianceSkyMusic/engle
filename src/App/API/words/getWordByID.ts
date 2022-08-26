import axios from 'axios';

import { BASE_URL } from '../consts';
import { IWord } from '../../types/interfaces';

export const getWordsByID = async (idWord: string):Promise<IWord> => {
	const res = await axios.get(`${BASE_URL}words/${idWord}`, {
		headers: {
			Accept: 'application/json',
		},
	});
	return res.data;
};
