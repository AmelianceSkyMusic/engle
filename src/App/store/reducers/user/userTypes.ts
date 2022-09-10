export interface IUserState {
	userName: string;
	userId: string;
	userEmail: string;
	isLogged: boolean;
	isLoading: boolean;
	error: string | null;
}

export enum EUserActionTypes {
	INIT = '__INIT__',
	GET_USER = 'GET_USER',
	SET_USER = 'SET_USER',
	GET_IS_USER_LOGGED = 'GET_IS_USER_LOGGED',
}

interface IInit {
	type: EUserActionTypes.INIT;
}

interface IGetUser {
type: EUserActionTypes.GET_USER;
	payload: { userName: string; userEmail: string; userId: string; isLogged: boolean };
}

interface ISetUser {
type: EUserActionTypes.SET_USER;
	payload: { userName: string; userEmail: string; userId: string; isLogged: boolean };
}

interface IGetUserIsLogged {
	type: EUserActionTypes.GET_IS_USER_LOGGED;
	payload: { isLogged: boolean };
}

export type TUserActions =
	IInit |
	IGetUser |
	ISetUser |
	IGetUserIsLogged
