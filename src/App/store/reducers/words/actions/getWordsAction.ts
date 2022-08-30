import {
	Action, ActionCreator, AnyAction, Dispatch,
} from 'redux';
import { ThunkAction } from 'redux-thunk';
import API from '../../../../API';
import { IUserPageWords } from '../../../../types/interfaces';
import { TRootState } from '../../rootReducer';
import { EWordsActionTypes, TWordActions } from '../wordsTypes';

const getWordsErrorAction: ActionCreator<Action> = (error: string) => ({
	type: EWordsActionTypes.GET_WORDS_ERROR,
	payload: error,
});

export function getWordsAction(
	groupNumber = 0,
	pageNumber = 0,
): ThunkAction<void, TRootState, unknown, AnyAction> {
	return async function noName(dispatch: Dispatch<TWordActions>) {
		try {
			dispatch({ type: EWordsActionTypes.GET_WORDS });
			const user = JSON.parse(localStorage.getItem('user') as string);
			const { userId, isLogged } = user;

			const words = await API.getWords(groupNumber, pageNumber);

			let userPageWords: IUserPageWords[];

			if (isLogged) {
				const response = await API.getUserAggregateWords({
					userId,
					groupNumber,
					pageNumber,
					filter: '{"$or":[{"$and":[{"userWord.difficulty":"hard"}]}, {"userWord.optional.isLearned": true}]}',
				});

				const userWordsInThisPage = response[0].paginatedResults;
				// eslint-disable-next-line no-underscore-dangle
				const userWordIds = userWordsInThisPage.map((userWord) => userWord._id);

				userPageWords = words.map((word) => {
					const idPosition = userWordIds.indexOf(word.id);

					if (idPosition >= 0) {
						return { ...word, ...{ userWord: userWordsInThisPage[idPosition].userWord } };
					}
					return word;
				});
			} else {
				userPageWords = { ...words };
			}

			dispatch({
				type: EWordsActionTypes.GET_WORDS_SUCCESS,
				payload: userPageWords,
			});
		} catch (error) {
			dispatch(getWordsErrorAction('Can\'t load word cards!'));
		}
	};
}
