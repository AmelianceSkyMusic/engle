import { IUserWord } from '../../../../types/interfaces';
import API from '../../..';
import { store } from '../../../../store';

export async function deleteWordFromLearned(idWord: string) {
	const { userId } = store.getState().user;
	// eslint-disable-next-line no-console
	const word = await API.getUserWordByID(userId, idWord).catch((err) => console.error(err));
	if (!word) {
		const newWord: IUserWord = {
			difficulty: 'easy',
			optional: {
				isNew: true,
				isLearned: false,
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
		await API.createUserWord(userId, idWord, newWord)
			// eslint-disable-next-line no-console
			.catch((err) => console.error(err));
	} else {
		delete word.id;
		delete word.wordId;
		if (word.optional.isLearned === true) {
			word.optional.isLearned = false;
			// eslint-disable-next-line no-console
			await API.updateUserWord(userId, idWord, word).catch((err) => console.error(err));
		}
	}
}
