import { store } from '../../../store';
import { EUserActionTypes, TUserActions } from '../userTypes';

export function getUserAction(): TUserActions {
	return {
		type: EUserActionTypes.GET_USER,
		payload: {
			userName: store.getState().user.userName,
			userEmail: store.getState().user.userEmail,
			userId: store.getState().user.userId,
			isLogged: store.getState().user.isLogged,
		},
	};
}
