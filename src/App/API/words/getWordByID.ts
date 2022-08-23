import axios from 'axios';

import { BASE_URL } from '../Base_url';

export const getWordsByID = async (idWord: string) => {
	const res = await axios.get(`${BASE_URL}words/${idWord}`, {
		headers: {
			Accept: 'application/json',
		},
	});
	return res.data;
};
