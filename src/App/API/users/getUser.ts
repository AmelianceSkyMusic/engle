import axios from 'axios';

import { BASE_URL } from '../consts';
import { IUser } from '../../types/interfaces';

export const getUser = async (userId: string): Promise<IUser> => {
	const token = `${localStorage.getItem('token')}`;
	const res = await axios.get(`${BASE_URL}users/${userId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res.data;
};
