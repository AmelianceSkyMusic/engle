import { updateStatTextBook } from './updateStatTextBook';
import { updateStatGameSprint } from './updateStatGameSprint';
import { updateStatGameAudioCall } from './updateStatGameAudiocall';
import { getUserStatistics } from './axios/getUserStatistic';
import { IStatistic } from '../../../types/interfaces';

async function updateStatistic(
	userId: string,
	blockUpdate: 'textbook' | 'audioCall' | 'sprint',
	value: object | { learnedWords: string },
) {
	const dateNow = new Date().toLocaleDateString();
	let curStatUser = await getUserStatistics(userId)
		.catch((err) => console.error(err)) as IStatistic;
	if (!curStatUser) {
		curStatUser = {
			learnedWords: 0,
			optional: {
				textBook: {
					learnedWords: {
						[dateNow]: [],
					},
				},
				audioCall: {
					newWords: {},
					countNewWords: 0,
					countShowedWords: 0,
					countRight: 0,
					countWrong: 0,
					topRight: 0,
				},
				sprint: {
					newWords: {},
					countNewWords: 0,
					countShowedWords: 0,
					countRight: 0,
					countWrong: 0,
					topRight: 0,
				},
			},
		};
	} else {
		(delete curStatUser.id);
	}
	switch (blockUpdate) {
	case 'textbook':
		await updateStatTextBook(userId, value as { learnedWords: string }, curStatUser);
		break;
	case 'audioCall':
		await updateStatGameAudioCall(userId, value, curStatUser);
		break;
	case 'sprint':
		await updateStatGameSprint(userId, value, curStatUser);
		break;
	default:
		break;
	}
}

export { updateStatistic };
