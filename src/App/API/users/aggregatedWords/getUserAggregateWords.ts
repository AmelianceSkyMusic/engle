import axios from 'axios';

import { BASE_URL } from '../../consts';
import { IAggregateUserWordsData } from '../../../types/interfaces';

interface IGetUserAggregateWords {
	userId: string;
	groupNumber?: number;
	pageNumber?: number;
	wordsPerPage?: number;
	filter?: string;
}

export const getUserAggregateWords = async ({
	userId,
	groupNumber,
	pageNumber,
	wordsPerPage,
	filter,
}: IGetUserAggregateWords): Promise<IAggregateUserWordsData[]> => {
	const token = `${localStorage.getItem('token')}`;

	const params: string[] = [];
	if (groupNumber) params.push(`group=${groupNumber}`);
	if (pageNumber) params.push(`page=${pageNumber}`);
	if (wordsPerPage) params.push(`wordsPerPage=${wordsPerPage}`);
	if (filter) params.push(`filter=${filter}`);

	const res = await axios.get(`${BASE_URL}users/${userId}/aggregatedWords?${params.join('&')}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res.data;
};
