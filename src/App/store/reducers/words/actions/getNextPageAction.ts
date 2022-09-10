import { EWordsActionTypes, TWordActions } from '../wordsTypes';

export function getNextPageAction(currentPage: number, maxPage: number): TWordActions {
	const nextPage = currentPage >= maxPage ? maxPage : currentPage + 1;
	return {
		type: EWordsActionTypes.GET_NEXT_PAGE,
		payload: nextPage,
	};
}
