/* eslint-disable no-param-reassign */
import { updateUserStatistics } from './axios/updateUserStatistic';
import { getUserStatistics } from './axios/getUserStatistic';
import { IStatistic } from '../../../types/interfaces';

async function updateStatTextBook(
	userId: string,
	value: { learnedWords: string[] },
	curStat: IStatistic,
) {
	const updateValue = value.learnedWords;
	// eslint-disable-next-line no-case-declarations
	const dateNow = new Date().toLocaleDateString();
	if ('textBook' in curStat.optional) {
		if (!(dateNow in curStat.optional.textBook.learnedWords)) {
			curStat.optional.textBook.learnedWords = { [dateNow]: updateValue };
			curStat.learnedWords += updateValue.length;
		} else {
			// eslint-disable-next-line max-len
			curStat.optional.textBook.learnedWords[dateNow]	= ((curStat.optional.textBook.learnedWords[dateNow]).concat(...updateValue));
			curStat.learnedWords += updateValue.length;
		}
	} else {
		curStat.optional.textBook = {
			learnedWords: {
				[dateNow]: [...updateValue],
			},
		};
	}
	await updateUserStatistics(userId, curStat);
}

export { updateStatTextBook };