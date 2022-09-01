import { store } from '../../../store';
import { EUserActionTypes, TUserActions } from '../userTypes';

interface IGetUserAction {
	userName?: string;
	userEmail?: string;
	userId?: string;
	isLogged?: boolean;
}

export function setUserAction({
	userName, userEmail, userId, isLogged,
}: IGetUserAction): TUserActions {
	const userNameStore = store.getState().user.userName;
	const userEmailStore = store.getState().user.userEmail;
	const userIdStore = store.getState().user.userId;
	const isLoggedStore = store.getState().user.isLogged;

	return {
		type: EUserActionTypes.SET_USER,
		payload: {
			userName: userName || userNameStore,
			userEmail: userEmail || userEmailStore,
			userId: userId || userIdStore,
			isLogged: isLogged ?? isLoggedStore,
		},
	};
}
