import { updateUserStatistics } from './axios/updateUserStatistic';
import { getUserStatistics } from './axios/getUserStatistic';
import { IStatistic } from '../../../types/interfaces';

interface IStatplusID extends IStatistic {
id: string;
}

async function updateStatTextBook(userId: string, caseOfOpt: string, value: string[] | number[]) {
	console.log(userId);
	// const { userId } = JSON.parse(localStorage.getItem('user') as string);
	const curStat = await getUserStatistics(userId);
	console.log(delete curStat.id);
	switch (caseOfOpt) {
	case 'learnedWords':
		if (curStat) {
		// eslint-disable-next-line no-case-declarations
		// eslint-disable-next-line no-case-declarations
			const dateNow = new Date().toLocaleDateString();
			console.log(curStat);
			// console.log(Object.hasOwn(curStat, dateNow));
			if ((dateNow in curStat.optional.textBook.learnedWords)) {
				console.log('update');
				// eslint-disable-next-line max-len
				curStat.optional.textBook.learnedWords[dateNow] = [...curStat.optional.textBook.learnedWords[dateNow], ...value as string[]];
			// eslint-disable-next-line max-len
			// curStat.optional.textBook.learnedWords[dateNow] = ((curStat.optional.textBook.learnedWords[dateNow]).concat(...value as string[]));
			} else {
				console.log('const');
				curStat.optional.textBook.learnedWords = { [dateNow]: value as string[] };
			}
			// curStat.optional.textBook.learnedWords = { [dateNow]: value as string[] };
			// console.log(curStat);
			await updateUserStatistics(userId, curStat);
		}
		break;
	default:
		console.log('unknown option');
		break;
	}
}

export { updateStatTextBook };
