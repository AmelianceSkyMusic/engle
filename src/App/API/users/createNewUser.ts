import axios from 'axios';

import { BASE_URL } from '../consts';
import { IUser } from '../../types/interfaces';

type TRes = {
	data: IUser;
	statusText: string;
}

export const createNewUser = async (name: string, mail: string, pass: string): Promise<TRes> => {
	const res = await axios.post(`${BASE_URL}users`, {
		name: `${name}`,
		email: `${mail}`,
		password: `${pass}`,
	});
	return { data: res.data, statusText: res.statusText };
};
