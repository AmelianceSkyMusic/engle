/* eslint-disable no-param-reassign */
import API from '../..';
import { IUserWord } from '../../../types/interfaces';

async function updateWordAudiocall(userId: string, wordId: string, value: 'wrong' | 'right', userWord: IUserWord) {
	switch (value) {
	case 'wrong':
		userWord.optional.audioCall.wrong += 1;
		break;
	case 'right':
		userWord.optional.audioCall.right += 1;
		break;
	default:
		console.log('unknown opinion');
		break;
	}
	API.updateUserWord(userId, wordId, userWord);
}

export { updateWordAudiocall };
