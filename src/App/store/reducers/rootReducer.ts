import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { wordsReducer } from './words/wordsReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	words: wordsReducer,
	// statisticsReducer,
});

export type TRootState = ReturnType<typeof rootReducer>
