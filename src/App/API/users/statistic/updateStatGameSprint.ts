/* eslint-disable no-param-reassign */
import { updateUserStatistics } from './axios/updateUserStatistic';
import { IStatistic } from '../../../types/interfaces';

async function updateStatGameSprint(userId: string, value: object, curStat: IStatistic) {
	Object.entries(value).forEach((el: [string, string[] | number]) => {
		switch (el[0]) {
		case 'newWords':
			// eslint-disable-next-line no-case-declarations
			const dateNow = new Date().toLocaleDateString();
			if ('newWords' in curStat.optional.sprint) {
				if ((dateNow in curStat.optional.sprint.newWords)) {
					// eslint-disable-next-line max-len
					curStat.optional.sprint.newWords[dateNow] =	[...curStat.optional.sprint.newWords[dateNow], ...el[1] as string[]];
				} else {
					curStat.optional.sprint.newWords[dateNow] = el[1] as string[];
				}
			} else {
				curStat.optional.sprint.newWords = {
					[dateNow]: el[1] as string[],
				};
			}
			break;
		case 'countNewWords':
			curStat.optional.sprint.countNewWords += el[1] as number;
			break;
		case 'countRight':
			curStat.optional.sprint.countRight += el[1] as number;
			break;
		case 'countWrong':
			curStat.optional.sprint.countWrong += el[1] as number;
			break;
		case 'topRight':
			if (curStat.optional.sprint.topRight < el[1]) {
				curStat.optional.sprint.topRight = el[1] as number;
			}
			break;
		default:
			console.log('unknown option');
			break;
		}
	});
	await updateUserStatistics(userId, curStat);
}

export { updateStatGameSprint };
