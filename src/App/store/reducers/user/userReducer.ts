import { EUserActionTypes, IUserState, TUserActions } from './userTypes';

function getInitState(): IUserState {
	if (localStorage.getItem('user') !== null) {
		const user = JSON.parse(localStorage.getItem('user') as string);
		return {
			userName: user.userName,
			userId: user.userId,
			userEmail: user.userEmail,
			isLogged: user.isLogged,
			isLoading: false,
			error: null,
		};
	}

	return {

		userName: 'Друг',
		userId: '',
		userEmail: '',
		isLogged: false,
		isLoading: false,
		error: null,
	};

}

const initialUserState = getInitState();

export function userReducer(
	state = initialUserState,
	action: TUserActions = { type: EUserActionTypes.INIT },
): IUserState {

	switch (action.type) {

	case EUserActionTypes.INIT: return {
		...state,
		isLoading: false,
		userName: 'Друг',
		userId: '',
		userEmail: '',
		isLogged: false,
		error: null,
	};

	case EUserActionTypes.GET_USER: return {
		...state,
		isLoading: false,
		userName: action.payload.userName,
		userEmail: action.payload.userEmail,
		userId: action.payload.userId,
		isLogged: action.payload.isLogged,
	};

	case EUserActionTypes.SET_USER: return {
		...state,
		isLoading: false,
		userName: action.payload.userName,
		userEmail: action.payload.userEmail,
		userId: action.payload.userId,
		isLogged: action.payload.isLogged,
	};

	case EUserActionTypes.GET_IS_USER_LOGGED: return {
		...state,
		isLogged: action.payload.isLogged,
	};

	default:
		return state;
	}
}
