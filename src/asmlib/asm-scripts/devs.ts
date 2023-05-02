const error = (...msg: unknown[]): void => {
	// eslint-disable-next-line no-console
	console.log('ASM | ERROR -->', ...msg);
};

export const devs = {
	error,
};
