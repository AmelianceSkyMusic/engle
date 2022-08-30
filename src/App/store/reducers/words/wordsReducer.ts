import { EWordsActionTypes, IWordsState, TWordActions } from './wordsTypes';

const initialWordsState: IWordsState = {
	words: [],
	isLoading: false,
	error: null,
	groupNumber: 0,
	pageNumber: 0,
	pagesPerGroup: 30,
	hardWords: [], // TODO: check is need
	userPageWord: [],
	userAggregateWords: [],
};

export function wordsReducer(
	state = initialWordsState,
	action: TWordActions = { type: EWordsActionTypes.INIT },
): IWordsState {
	switch (action.type) {
	case EWordsActionTypes.GET_WORDS:
		return {
			...state,
			isLoading: true,
		};

	case EWordsActionTypes.GET_WORDS_SUCCESS:
		return {
			...state,
			isLoading: false,
			userPageWord: action.payload,
		};

	case EWordsActionTypes.GET_WORDS_ERROR:
		return {
			...state,
			isLoading: false,
			error: action.payload,
		};

	case EWordsActionTypes.SET_WORDS_GROUP_NUMBER:
		return {
			...state,
			groupNumber: action.payload,
		};

	case EWordsActionTypes.SET_WORDS_PAGE_NUMBER:
		return {
			...state,
			pageNumber: action.payload,
		};

	case EWordsActionTypes.GET_PREV_PAGE:
		return {
			...state,
			pageNumber: action.payload,
		};

	case EWordsActionTypes.GET_NEXT_PAGE:
		return {
			...state,
			pageNumber: action.payload,
		};

	case EWordsActionTypes.GET_HARD_WORDS: // TODO: check is need
		return {
			...state,
			hardWords: [...state.hardWords, ...action.payload],
		};

	case EWordsActionTypes.SET_WORD_TO_HARD: // TODO: check is need
		return {
			...state,
			hardWords: [...state.hardWords, action.payload],
		};

	case EWordsActionTypes.SET_WORD_TO_LEARNED: // TODO: check is need
		return {
			...state,
			hardWords: [...state.hardWords, action.payload],
		};

	default:
		return state;
	}
}
