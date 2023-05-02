/* eslint-disable no-param-reassign */
import { updateUserStatistics } from './axios/updateUserStatistic';
import { IStatistic } from '../../../types/interfaces';

type TOptional = {
		textBook: {
		learnedWords: {
			[date: string]: string[];
		};
	};
	audioCall: {
		newWords: {
			[date: string]: string[];
		};
		countNewWords: number;
		countShowedWords: number;
		countRight: number;
		countWrong: number;
		topRight: number;
	};
	sprint: {
		newWords: {
			[date: string]: string[];
		};
		countNewWords: number;
		countShowedWords: number;
		countRight: number;
		countWrong: number;
		topRight: number;
	};
}

async function updateStatTextBook(
	userId: string,
	value: { learnedWords: string },
	curStat: IStatistic,
) {
	const updateValue = value.learnedWords;
	// eslint-disable-next-line no-case-declarations
	const dateNow = new Date().toLocaleDateString();
	if ('textBook' in curStat.optional) {
		if (!(dateNow in curStat.optional.textBook.learnedWords)) {
			const lastDates = JSON.parse(JSON.stringify(curStat.optional.textBook.learnedWords));
			curStat.optional.textBook.learnedWords = { ...lastDates, [dateNow]: [updateValue] };
			curStat.learnedWords += 1;
		} else {
			// eslint-disable-next-line max-len
			curStat.optional.textBook.learnedWords[dateNow]	= ((curStat.optional.textBook.learnedWords[dateNow]).concat(updateValue));
			curStat.learnedWords += 1;
		}
	} else {
		(curStat.optional as TOptional).textBook = {
			learnedWords: {
				[dateNow]: [updateValue],
			},
		};
	}
	await updateUserStatistics(userId, curStat);
}

export { updateStatTextBook };
