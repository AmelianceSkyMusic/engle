import { EUserActionTypes, TUserActions } from '../userTypes';

export function getUserIsLogged(): TUserActions {
	const user = JSON.parse(localStorage.getItem('user') as string);

	const { isLogged } = user;

	return {
		type: EUserActionTypes.GET_IS_USER_LOGGED,
		payload: { isLogged },
	};
}
