import { EWordsActionTypes, IWordsState, TWordActions } from './wordsTypes';

const initialWordsState: IWordsState = {
	isLoading: false,
	error: null,
	groupNumber: Number(localStorage.getItem('currentGroup')),
	pageNumber: Number(localStorage.getItem('currentPage')),
	pagesPerGroup: 30,
	userPageWords: [],
};

export function wordsReducer(
	state = initialWordsState,
	action: TWordActions = { type: EWordsActionTypes.INIT },
): IWordsState {
	switch (action.type) {
	case EWordsActionTypes.GET_WORDS: return {
		...state,
		isLoading: true,
	};

	case EWordsActionTypes.GET_WORDS_SUCCESS: return {
		...state,
		isLoading: false,
		userPageWords: action.payload,
	};

	case EWordsActionTypes.GET_WORDS_ERROR: return {
		...state,
		isLoading: false,
		error: action.payload,
	};

	case EWordsActionTypes.SET_GROUP_NUMBER: return {
		...state,
		groupNumber: action.payload,
	};

	case EWordsActionTypes.SET_PAGE_NUMBER: return {
		...state,
		pageNumber: action.payload,
	};

	case EWordsActionTypes.GET_PREV_PAGE: return {
		...state,
		pageNumber: action.payload,
	};

	case EWordsActionTypes.GET_NEXT_PAGE: return {
		...state,
		pageNumber: action.payload,
	};

	default:
		return state;
	}
}
