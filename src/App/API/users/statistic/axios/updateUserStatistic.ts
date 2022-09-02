import axios from 'axios';

import { BASE_URL } from '../../../consts';
import { IStatistic } from '../../../../types/interfaces';

export const updateUserStatistics = async (
	userId: string,
	curData: object,
	// limit: number,
	// newWords: number,
	// currentDate: Date,
	// id1: string,
	// id2: string,
): Promise<IStatistic> => {
	console.log(curData);
	const token = `${localStorage.getItem('token')}`;
	const res = await axios({
		method: 'put',
		url: `${BASE_URL}users/${userId}/statistics`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		data: curData,
		// data['optional'][]
	});
	console.log(res);
	return res.data;
};
