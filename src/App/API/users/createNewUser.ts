import axios from 'axios';

import { BASE_URL } from '../Base_url';
import { IUser } from '../../interfaces/interfaces';

export const createNewUser = async (name:string, mail: string, pass: string):Promise<IUser> => {
	const res = await axios.post(`${BASE_URL}users`, {
		name: `${name}`,
		email: `${mail}`,
		password: `${pass}`,
	});
	return res.data;
};
