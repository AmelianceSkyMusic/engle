import { EWordsActionTypes, TWordActions } from '../wordsTypes';

export function setGroupNumberAction(group: number): TWordActions {
	return {
		type: EWordsActionTypes.SET_GROUP_NUMBER,
		payload: group,
	};
}
