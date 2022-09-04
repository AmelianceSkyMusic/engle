import { IUserWord } from '../../../../types/interfaces';
import API from '../../..';
import { store } from '../../../../store';

export async function addWordToHard(wordId: string) {
	const { userId } = store.getState().user;
	const word = await API.getUserWordByID(userId, wordId).catch((err) => console.error(err));
	if (!word) {
		const newWord: IUserWord = {
			difficulty: 'hard',
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
		await API.createUserWord(userId, wordId, newWord).catch((err) => console.error(err));
	} else {
		delete word.id;
		delete word.wordId;
		if (word.difficulty === 'easy') {
			word.difficulty = 'hard';
			await API.updateUserWord(userId, wordId, word).catch((err) => console.error(err));
		}
	}
}
