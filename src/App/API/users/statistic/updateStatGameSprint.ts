import { updateUserStatistics } from './axios/updateUserStatistic';
import { getUserStatistics } from './axios/getUserStatistic';
import { ISprint } from '../../../types/interfaces';

// type TOptional = Pick<IStatistic, 'optional'>;
type TSprintGame = Partial<ISprint>

async function updateStatGameSprint(userId: string, caseOfOpt: string, value: string[] | number[]) {
	const curStat = await getUserStatistics(userId);
	(delete curStat.id);
	if (!('sprint' in curStat.optional)) {
		(curStat.optional.sprint as TSprintGame) = {
			newWords: {},
			countNewWords: 0,
			countShowedWords: 0,
			countRight: 0,
			countWrong: 0,
			topRight: 0,
		};
	}
	switch (caseOfOpt) {
	case 'newWords':
		if (curStat) {
			// eslint-disable-next-line no-case-declarations
			const dateNow = new Date().toLocaleDateString();
			console.log(curStat);
			if ((dateNow in curStat.optional.sprint.newWords)) {
				console.log('update');
				// eslint-disable-next-line max-len
				curStat.optional.sprint.newWords[dateNow] = [...curStat.optional.sprint.newWords[dateNow], ...value as string[]];
			} else {
				console.log('const');
				curStat.optional.sprint.newWords = { [dateNow]: value as string[] };
			}
			await updateUserStatistics(userId, curStat);
		}
		break;
	case 'countNewWords':
		// curStat.optional.textBook.countNewWords = Number(value[0]);

		// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-case-declarations
		const newObj = {
			countNewWord: value[0],
		};
		if (curStat) {
			if ('countNewWords' in curStat.optional.sprint) {
				curStat.optional.sprint.countNewWords = value[0] as number;
			} else {
				// curStat.optional.sprint = { countNewWords: value[0] as number };
				curStat.optional.sprint.countNewWords = value[0] as number;
			}
			console.log(curStat);
			await updateUserStatistics(userId, curStat);
		}
		break;
	case 'countRight':
		if (curStat) {
			await updateUserStatistics(userId, curStat);
		}
		break;
	case 'countWrong':
		if (curStat) {
			await updateUserStatistics(userId, curStat);
		}
		break;
	case 'topRight':
		if (curStat) {
			await updateUserStatistics(userId, curStat);
		}
		break;
	default:
		console.log('unknown option');
		break;
	}
}

export { updateStatGameSprint };
