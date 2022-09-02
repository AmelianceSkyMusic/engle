import { EWordsActionTypes, TWordActions } from '../wordsTypes';

export function setPageNumberAction(number: number): TWordActions {
	return {
		type: EWordsActionTypes.SET_PAGE_NUMBER,
		payload: number,
	};
}
