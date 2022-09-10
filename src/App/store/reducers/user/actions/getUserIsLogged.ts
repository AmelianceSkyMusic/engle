import { EUserActionTypes, TUserActions } from '../userTypes';

export function getUserIsLogged(): TUserActions {
	let isLogged = false;

	if (localStorage.getItem('user') !== null) {
		const user = JSON.parse(localStorage.getItem('user') as string);
		isLogged = user.isLogged;
	}

	return {
		type: EUserActionTypes.GET_IS_USER_LOGGED,
		payload: { isLogged },
	};
}
