import { EWordsActionTypes, TWordActions } from '../wordsTypes';

export function getPrevPageAction(currentPage: number, minPage = 0): TWordActions {
	const prevPage = currentPage <= minPage ? minPage : currentPage - 1;
	return {
		type: EWordsActionTypes.GET_PREV_PAGE,
		payload: prevPage,
	};
}
