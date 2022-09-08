/* eslint-disable no-param-reassign */
import { updateUserStatistics } from './axios/updateUserStatistic';
import { IStatistic } from '../../../types/interfaces';

async function updateStatGameAudioCall(userId: string, value: object, curStat: IStatistic) {
	Object.entries(value).forEach((el: [string, string[] | number]) => {
		switch (el[0]) {
		case 'newWords':
			// eslint-disable-next-line no-case-declarations
			const dateNow = new Date().toLocaleDateString();
			if ('newWords' in curStat.optional.audioCall) {
				if ((dateNow in curStat.optional.audioCall.newWords)) {
				// eslint-disable-next-line max-len
					curStat.optional.audioCall.newWords[dateNow] =	[...curStat.optional.audioCall.newWords[dateNow], ...el[1] as string[]];
				} else {
					curStat.optional.audioCall.newWords[dateNow] = el[1] as string[];
				}
			} else {
				curStat.optional.audioCall.newWords = {
					[dateNow]: el[1] as string[],
				};
			}
			break;
		case 'countNewWords':
			curStat.optional.audioCall.countNewWords += el[1] as number;
			break;
		case 'countShowedWords':
			curStat.optional.audioCall.countShowedWords += el[1] as number;
			break;
		case 'countRight':
			curStat.optional.audioCall.countRight += el[1] as number;
			break;
		case 'countWrong':
			curStat.optional.audioCall.countWrong += el[1] as number;
			break;
		case 'topRight':
			if (curStat.optional.audioCall.topRight < el[1]) {
				curStat.optional.audioCall.topRight = el[1] as number;
			}
			break;
		default:
			console.log('unknown option');
			break;
		}
	});
	await updateUserStatistics(userId, curStat);
}

export { updateStatGameAudioCall };
