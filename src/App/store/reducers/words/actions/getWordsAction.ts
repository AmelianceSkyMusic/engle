import {
	Action, ActionCreator, AnyAction, Dispatch,
} from 'redux';
import { ThunkAction } from 'redux-thunk';
import API from '../../../../API';
import { IUserPageWord } from '../../../../types/interfaces';
import { store } from '../../../store';
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
		localStorage.setItem('currentGroup', groupNumber.toString());
		localStorage.setItem('currentPage', pageNumber.toString());
		try {
			dispatch({ type: EWordsActionTypes.GET_WORDS });

			const { userId } = store.getState().user;
			const { isLogged } = store.getState().user;

			let userPageWords: IUserPageWord[];
			if (isLogged) {
				const response = await API.getUserAggregateWords({
					userId,
					groupNumber,
					pageNumber,
					wordsPerPage: 20,
				});
				userPageWords = response[0].paginatedResults.map((word) => {
					const gottenWord = JSON.parse(JSON.stringify(word));
					// eslint-disable-next-line no-underscore-dangle
					gottenWord.id = gottenWord._id;
					// eslint-disable-next-line no-underscore-dangle
					delete gottenWord._id;
					return gottenWord;
				});
			} else {
				userPageWords = await API.getWords(groupNumber, pageNumber);
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
