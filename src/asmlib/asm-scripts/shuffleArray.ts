import { getRandomNumber } from './getRandomNumber';

export function shuffleArray<TYPE>(array: TYPE[]): TYPE[] {
	const ar = [...array];
	for (let i = 0; i < array.length; i++) {
		const j = getRandomNumber(0, array.length - 1);
		[ar[i], ar[j]] = [ar[j], ar[i]];
	}
	return ar;
}
