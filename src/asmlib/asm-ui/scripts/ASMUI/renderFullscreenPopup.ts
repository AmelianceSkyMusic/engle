import { createHTMLElem } from '../../../asm-scripts';

export const renderFullscreenPopup = (content$: HTMLElement, action: () => void) => {
  const fragment$: DocumentFragment = new DocumentFragment();

  const zeroBlock$ = createHTMLElem(fragment$, 'div', { class: 'zero-block' });
  const blackout$ = createHTMLElem(zeroBlock$, 'div', { class: 'blackout show' });
  const popup$ = createHTMLElem(zeroBlock$, 'div', { class: 'popup show' });

  popup$.append(content$);

  blackout$.addEventListener('click', () => {
    action();
    popup$.classList.remove('show');
    blackout$.classList.remove('show');
    blackout$.addEventListener('animationend', () => {
      zeroBlock$.remove();
    });
  });
  return fragment$;
};
