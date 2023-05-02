import { getRandomNumber } from './getRandomNumber';

export function getRandomRGBColor(): number[] {
	const r = getRandomNumber(0, 255);
	const g = getRandomNumber(0, 255);
	const b = getRandomNumber(0, 255);
	return [r, g, b];
}
