import API from '../..';
import { store } from '../../../store';
import { IUserWord } from '../../../types/interfaces';
import { updateWordAudiocall } from './updateWordAudiocall';
import { updateWordSprint } from './updateWordSprint';

async function changeUserWord(wordId: string, game: 'audioCall' | 'sprint', value: 'wrong' | 'right') {
	const { userId } = store.getState().user;
	let userWord = await API.getUserWordByID(userId, wordId);
	if (!userWord) {
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
		userWord = await API.createUserWord(userId, wordId, newWord);
		delete userWord.id;
		delete userWord.wordId;
	} else {
		delete userWord.id;
		delete userWord.wordId;
	}
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

export { changeUserWord };
