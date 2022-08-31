import { EUserActionTypes, TUserActions } from '../userTypes';

export function initUserAction(): TUserActions {
	return {
		type: EUserActionTypes.INIT,
	};
}
