import axios from 'axios';

import { BASE_URL } from '../consts';
import { IAuthentication as IAuthen } from '../../interfaces/interfaces';

export const getNewUserToken = async (userId: string, refreshToken: string):Promise<IAuthen> => {
	const res = await axios.get(`${BASE_URL}users/${userId}/tokens`, {
		headers: {
			Authorization: `Bearer ${refreshToken}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res.data;
};
