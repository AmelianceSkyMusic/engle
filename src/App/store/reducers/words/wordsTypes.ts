import { IUserPageWord } from '../../../types/interfaces';

export interface IWordsState {
	isLoading: boolean;
	error: string | null;
	groupNumber: number;
	pageNumber: number;
	pagesPerGroup: number;
	userPageWords: IUserPageWord[];
}

export enum EWordsActionTypes {
	INIT = '__INIT__',
	GET_WORDS = 'GET_WORDS',
	GET_WORDS_SUCCESS = 'GET_WORDS_SUCCESS',
	GET_WORDS_ERROR = 'GET_WORDS_ERROR',

	SET_GROUP_NUMBER = 'SET_GROUP_NUMBER',
	SET_PAGE_NUMBER = 'SET_PAGE_NUMBER',
	GET_PREV_PAGE = 'GET_PREV_PAGE',
	GET_NEXT_PAGE = 'GET_NEXT_PAGE',

	SET_WORD_TO_HARD = 'SET_WORD_TO_HARD',
	SET_WORD_TO_LEARNED = 'SET_WORD_TO_LEARNED',
}

interface IInit {
	type: EWordsActionTypes.INIT;
}

interface IGetWords {
	type: EWordsActionTypes.GET_WORDS;
}
interface IGetWordsSuccess {
	type: EWordsActionTypes.GET_WORDS_SUCCESS;
	payload: IUserPageWord[];
}
interface IGetWordsError {
	type: EWordsActionTypes.GET_WORDS_ERROR;
	payload: string;
}

interface ISetWordsGroupNumber {
	type: EWordsActionTypes.SET_GROUP_NUMBER;
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
interface ISetPage {
	type: EWordsActionTypes.SET_PAGE_NUMBER;
	payload: number;
}

export type TWordActions =
	IInit |

	IGetWords |
	IGetWordsSuccess |
	IGetWordsError |

	ISetWordsGroupNumber |
	INextPage |
	IPrevPage |
	ISetPage
