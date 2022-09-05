import axios from 'axios';

import { BASE_URL } from '../../../consts';
import { IStatistic } from '../../../../types/interfaces';

export const getUserStatistics = async (userId: string): Promise<IStatistic> => {
	const token = `${localStorage.getItem('token')}`;
	const res = await axios.get(`${BASE_URL}users/${userId}/statistics`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	console.log(res);
	return res.data;
};
