import { Action, ActionCreator, Dispatch } from 'redux';
import API from '../../../../API';
import { IHardWord } from '../../../../types/interfaces';
import { store } from '../../../store';
import { EHardWordsActionTypes, THardWordActions } from '../hardWordsTypes';

const getWordsErrorAction: ActionCreator<Action> = (error: string) => ({
	type: EHardWordsActionTypes.GET_HARD_WORDS_ERROR,
	payload: error,
});

export function getHardWordsAction() {
	return async function noName(dispatch: Dispatch<THardWordActions>) {
		try {
			dispatch({ type: EHardWordsActionTypes.GET_HARD_WORDS });

			const { userId } = store.getState().user;
			const { isLogged } = store.getState().user;

			let hardWords: IHardWord[];

			if (isLogged) {
				const response = await API.getUserAggregateWords({
					userId,
					filter: '{"$and":[{"userWord.difficulty":"hard"}]}',
				});

				const hardWordsForBack = response[0].paginatedResults;

				hardWords = hardWordsForBack.map((word) => {

					const gottenWord = JSON.parse(JSON.stringify(word));

					// eslint-disable-next-line no-underscore-dangle
					gottenWord.id = gottenWord._id;

					// eslint-disable-next-line no-underscore-dangle
					delete gottenWord._id;

					return gottenWord;
				});

			} else {
				hardWords = [];
			}

			dispatch({
				type: EHardWordsActionTypes.GET_HARD_WORDS_SUCCESS,
				payload: hardWords,
			});
		} catch (error) {
			dispatch(getWordsErrorAction('Can\'t load word cards!'));
		}
	};
}
