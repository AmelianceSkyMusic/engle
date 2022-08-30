import { EUserActionTypes, TUserActions } from '../userTypes';

export function getUserAction(): TUserActions {
	let userName = 'Друг';
	let userId = '';
	let userEmail = '';
	let isLogged = false;

	if (localStorage.getItem('user') !== null) {
		const user = JSON.parse(localStorage.getItem('user') as string);
		userName = user.userName;
		userId = user.userId;
		userEmail = user.userEmail;
		isLogged = user.isLogged;
	}

	return {
		type: EUserActionTypes.GET_USER,
		payload: {
			userName, userEmail, userId, isLogged,
		},
	};
}
