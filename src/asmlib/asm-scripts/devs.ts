const error = (...msg: unknown[]): void => {
  console.log('ASM | ERROR -->', ...msg);
};

export const devs = {
  error,
};
