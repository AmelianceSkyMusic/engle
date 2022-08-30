import {
	IAggregateUserWords, IUserPageWords, IWord,
} from '../../../types/interfaces';

export interface IWordsState {
	words: IWord[];
	isLoading: boolean;
	error: string | null;
	groupNumber: number;
	pageNumber: number;
	pagesPerGroup: number;
	hardWords: IWord[];
	userPageWord: IUserPageWords[];
	userAggregateWords: IAggregateUserWords[];
}

export enum EWordsActionTypes {
	INIT = '__INIT__',
	GET_WORDS = 'GET_WORDS',
	GET_WORDS_SUCCESS = 'GET_WORDS_SUCCESS',
	GET_WORDS_ERROR = 'GET_WORDS_ERROR',

	SET_WORDS_GROUP_NUMBER = 'SET_WORDS_GROUP_NUMBER',
	SET_WORDS_PAGE_NUMBER = 'SET_WORDS_PAGE_NUMBER',

	GET_PREV_PAGE = 'GET_PREV_PAGE',
	GET_NEXT_PAGE = 'GET_NEXT_PAGE',

	GET_HARD_WORDS = 'GET_HARD_WORDS', // TODO: check is need
	SET_WORD_TO_HARD = 'SET_WORD_TO_HARD', // TODO: check is need
	SET_WORD_TO_LEARNED = 'SET_WORD_TO_LEARNED', // TODO: check is need
}

interface IInit {
	type: EWordsActionTypes.INIT;
}

interface IGetWords {
	type: EWordsActionTypes.GET_WORDS;
}
interface IGetWordsSuccess {
	type: EWordsActionTypes.GET_WORDS_SUCCESS;
	payload: IUserPageWords[];
}
interface IGetWordsError {
	type: EWordsActionTypes.GET_WORDS_ERROR;
	payload: string;
}

interface ISetWordsGroupNumber {
	type: EWordsActionTypes.SET_WORDS_GROUP_NUMBER;
	payload: number;
}
interface IPrevPage {
	type: EWordsActionTypes.GET_PREV_PAGE;
	payload: number;
}
interface INextPage {
	type: EWordsActionTypes.GET_NEXT_PAGE;
	payload: number;
}

interface IGetHardWords { // TODO: check is need
	type: EWordsActionTypes.GET_HARD_WORDS;
	payload: IWord[];
}
interface ISetWordToHard { // TODO: check is need
	type: EWordsActionTypes.SET_WORD_TO_HARD;
	payload: IWord;
}
interface ISetWordToLearned { // TODO: check is need
	type: EWordsActionTypes.SET_WORD_TO_LEARNED;
	payload: IWord;
}

export type TWordActions =
	IInit |

	IGetWords |
	IGetWordsSuccess |
	IGetWordsError |

	ISetWordsGroupNumber |
	INextPage |
	IPrevPage |

	IGetHardWords |
	ISetWordToHard |
	ISetWordToLearned
