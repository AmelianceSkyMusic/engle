import { combineReducers } from 'redux';
import { hardWordsReducer } from './hardWords/hardWordsReducer';
import { userReducer } from './user/userReducer';
import { wordsReducer } from './words/wordsReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	words: wordsReducer,
	hardWords: hardWordsReducer,
});

export type TRootState = ReturnType<typeof rootReducer>
