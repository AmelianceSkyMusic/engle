import axios from 'axios';

import { BASE_URL } from '../Base_url';

export const getUser = async (userId: string) => {
	const res = await axios.get(`${BASE_URL}users/${userId}`, {
		headers: {
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDE1YTI1MmI1NmRiMDAxNmQ0YzFkYyIsImlhdCI6MTY2MTA5MzEyMCwiZXhwIjoxNjYxMTA3NTIwfQ.MJczmdy4D2c_733WJYzzMV7yjpEiKJjyfdeXoVzVyfQ',
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res;
};
