import {
	IHardWord,
} from '../../../types/interfaces';

export interface IHardWordsState {
	isHardWordsLoading: boolean;
	hardWordsError: string | null;
	hardWords: IHardWord[];
}

export enum EHardWordsActionTypes {
	INIT = '__INIT__',
	GET_HARD_WORDS = 'GET_HARD_WORDS',
	GET_HARD_WORDS_SUCCESS = 'GET_HARD_WORDS_SUCCESS',
	GET_HARD_WORDS_ERROR = 'GET_HARD_WORDS_ERROR',
}

interface IInit {
	type: EHardWordsActionTypes.INIT;
}

interface IGetHardWords {
	type: EHardWordsActionTypes.GET_HARD_WORDS;
}
interface IGetHardWordsSuccess {
	type: EHardWordsActionTypes.GET_HARD_WORDS_SUCCESS;
	payload: IHardWord[];
}
interface IGetHardWordsError {
	type: EHardWordsActionTypes.GET_HARD_WORDS_ERROR;
	payload: string;
}

export type THardWordActions =
	IInit |
	IGetHardWords |
	IGetHardWordsSuccess |
	IGetHardWordsError
