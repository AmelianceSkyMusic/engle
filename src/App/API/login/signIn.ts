import axios from 'axios';

import { BASE_URL } from '../Base_url';

export const signIn = async (mail: string, pass: string) => {
	const res = await axios.post(`${BASE_URL}signin`, {
		email: `${mail}`,
		password: `${pass}`,
	});
	sessionStorage.setItem('refreshToken', `${res.data.refreshToken}`);
	sessionStorage.setItem('token', `${res.data.token}`);
	return res;
};
