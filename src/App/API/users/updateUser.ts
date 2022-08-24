import axios from 'axios';

import { BASE_URL } from '../consts';
import { IUser } from '../../interfaces/interfaces';

export const updateUser = async (userId: string, mail: string, pass: string): Promise<IUser> => {
	const token = `${sessionStorage.getItem('token')}`;
	const res = await axios({
		method: 'put',
		url: `${BASE_URL}users/${userId}`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		data: {
			email: `${mail}`,
			password: `${pass}`,
		},
	});
	return res.data;
};
