import { IUserWord } from '../../../../types/interfaces';
import API from '../../..';
import { store } from '../../../../store';

export async function addWordToLearned(wordId: string) {
	const { userId } = store.getState().user;
	// eslint-disable-next-line no-console
	const word = await API.getUserWordByID(userId, wordId).catch((err) => console.error(err));
	if (!word) {
		const newWord: IUserWord = {
			difficulty: 'easy',
			optional: {
				isNew: true,
				isLearned: true,
				audioCall: {
					right: 0,
					wrong: 0,
				},
				sprint: {
					right: 0,
					wrong: 0,
				},
			},
		};
		// eslint-disable-next-line no-console
		await API.createUserWord(userId, wordId, newWord).catch((err) => console.error(err));
	} else {
		delete word.id;
		delete word.wordId;
		if (word.optional.isLearned === false) {
			word.difficulty = 'easy';
			word.optional.isLearned = true;
			// eslint-disable-next-line no-console
			await API.updateUserWord(userId, wordId, word).catch((err) => console.error(err));
		}
	}
}
