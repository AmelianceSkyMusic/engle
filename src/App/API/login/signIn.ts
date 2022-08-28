import axios from 'axios';

import { BASE_URL } from '../consts';
import { IAuthentication } from '../../types/interfaces';

export const signIn = async (mail: string, pass: string):Promise<IAuthentication> => {
	const res = await axios.post(`${BASE_URL}signin`, {
		email: `${mail}`,
		password: `${pass}`,
	});
	return res.data;
};
