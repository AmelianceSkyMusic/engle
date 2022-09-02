import { EHardWordsActionTypes, IHardWordsState, THardWordActions } from './hardWordsTypes';

const initialWordsState: IHardWordsState = {
	isHardWordsLoading: false,
	hardWordsError: null,
	hardWords: [],
};

export function hardWordsReducer(
	state = initialWordsState,
	action: THardWordActions = { type: EHardWordsActionTypes.INIT },
): IHardWordsState {
	switch (action.type) {
	case EHardWordsActionTypes.GET_HARD_WORDS: return {
		...state,
		isHardWordsLoading: true,
	};

	case EHardWordsActionTypes.GET_HARD_WORDS_SUCCESS: return {
		...state,
		isHardWordsLoading: false,
		hardWords: action.payload,
	};

	case EHardWordsActionTypes.GET_HARD_WORDS_ERROR: return {
		...state,
		isHardWordsLoading: false,
		hardWordsError: action.payload,
	};

	default:
		return state;
	}
}
