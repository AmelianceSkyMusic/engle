import { IUserWord } from '../../../../types/interfaces';
import { useTypedSelector } from '../../../../store/hooks/useTypedSelector';
import API from '../../..';

export async function AddWordToLearned(wordId: string) {
	const { userId } = useTypedSelector((state) => state.user);
	const word = await API.getUserWordByID(userId, wordId).catch((err) => console.log(err));
	if (!word) {
		const newWord: IUserWord = {
			difficulty: 'easy',
			optional: {
				isNew: false,
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
		await API.createUserWord(userId, wordId, newWord).catch((err) => console.log(err));
	} else {
		delete word.id;
		delete word.wordId;
		if (word.optional.isLearned === false) {
			word.optional.isLearned = true;
			await API.updateUserWord(userId, wordId, word).catch((err) => console.log(err));
		}
	}
}
