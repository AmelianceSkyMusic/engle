import API from '../..';
import { store } from '../../../store';
import { IUserWordWithId } from '../../../types/interfaces';
import { updateWordAudiocall } from './updateWordAudiocall';
import { updateWordSprint } from './updateWordSprint';

async function changeUserWord(wordId: string, game: 'audioCall' | 'sprint', value: 'wrong' | 'right') {
	const { userId } = store.getState().user;
	const userWord = await API.getUserWordByID(userId, wordId).catch((err) => console.error(err));
	if (!userWord) {
		const newWord: IUserWordWithId = {
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
		const newUserWord = await API.createUserWord(userId, wordId, newWord) as IUserWordWithId;
		delete newUserWord.id;
		delete newUserWord.wordId;
		switch (game) {
		case 'audioCall':
			await updateWordAudiocall(userId, wordId, value, newUserWord);
			break;
		case 'sprint':
			await updateWordSprint(userId, wordId, value, newUserWord);
			break;

		default:
			break;
		}
	} else {
		delete userWord.id;
		delete userWord.wordId;
		switch (game) {
		case 'audioCall':
			await updateWordAudiocall(userId, wordId, value, userWord);
			break;
		case 'sprint':
			await updateWordSprint(userId, wordId, value, userWord);
			break;

		default:
			break;
		}
	}
}

export { changeUserWord };
