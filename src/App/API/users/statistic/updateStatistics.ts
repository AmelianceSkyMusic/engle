import { updateStatTextBook } from './updateStatTextBook';
import { updateStatGameSprint } from './updateStatGameSprint';

async function updateStatistic(
	userId: string,
	blockUpdate: string,
	caseOfOpt: string,
	value: string[] | number[],
) {
	switch (blockUpdate) {
	case 'textbook':
		await updateStatTextBook(userId, caseOfOpt, value);
		break;
	case 'audiocall':

		break;
	case 'sprint':
		await updateStatGameSprint(userId, caseOfOpt, value);
		break;
	default:
		break;
	}
}

export { updateStatistic };
