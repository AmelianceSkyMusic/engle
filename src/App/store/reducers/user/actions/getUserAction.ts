import { EUserActionTypes, TUserActions } from '../userTypes';

export function getUserAction(): TUserActions {
	const user = JSON.parse(localStorage.getItem('user') as string);
	const {
		userName, userId, userEmail, isLogged,
	} = user;

	return {
		type: EUserActionTypes.GET_USER,
		payload: {
			userName, userEmail, userId, isLogged,
		},
	};
}
