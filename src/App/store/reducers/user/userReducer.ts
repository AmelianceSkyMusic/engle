import { EUserActionTypes, IUserState, TUserActions } from './userTypes';

const initialUserState: IUserState = {
	userName: 'Друг',
	userId: '',
	userEmail: '',
	isLogged: false,
	isLoading: false,
	error: null,
};

export function userReducer(
	state = initialUserState,
	action: TUserActions = { type: EUserActionTypes.INIT },
): IUserState {
	switch (action.type) {
	case EUserActionTypes.GET_USER:
		return {
			...state,
			isLoading: false,
			userName: action.payload.userName,
			userEmail: action.payload.userEmail,
			userId: action.payload.userId,
		};

	case EUserActionTypes.GET_IS_USER_LOGGED:
		return {
			...state,
			isLogged: action.payload.isLogged,
		};

	default:
		return state;
	}
}
