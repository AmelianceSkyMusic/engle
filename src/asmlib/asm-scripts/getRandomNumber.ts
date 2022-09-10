export function getRandomNumber(min: number, max: number): number {
	return Math.trunc(Math.random() * (max - min + 1) + min);
}
