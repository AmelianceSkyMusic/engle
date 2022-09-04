import { IUserWord } from '../../../../types/interfaces';
import { useTypedSelector } from '../../../../store/hooks/useTypedSelector';
import API from '../../..';

export async function DeleteWordFromHard(idWord: string) {
	const { userId } = useTypedSelector((state) => state.user);
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
		await API.createUserWord(userId, idWord, newWord).catch((err) => console.error(err));
	} else {
		delete word.id;
		delete word.wordId;
		if (word.difficulty === 'hard') {
			word.difficulty = 'easy';
			await API.updateUserWord(userId, idWord, word).catch((err) => console.error(err));
		}
	}
}
