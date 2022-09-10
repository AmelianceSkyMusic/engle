export const removeBlackout = (blackout$: HTMLElement) => {
  blackout$.classList.remove('show');
  blackout$.addEventListener('animationend', () => {
    const zeroblock$ = blackout$.closest('.zero-block') as HTMLDivElement;
    zeroblock$.remove();
  });
};
