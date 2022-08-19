// using --> const blackout$ = ASMUI.renderBlackout(() => { ASMUI.removeBlackout(blackout$); });
import { createHTMLElem } from '../../../asm-scripts';

type TFunc = () => void;
export const renderBlackout = (...actions: TFunc[]) => {
  const fragment$: DocumentFragment = new DocumentFragment();

  const zeroBlock$ = createHTMLElem(fragment$, 'div', { class: 'zero-block' });
  const blackout$ = createHTMLElem(zeroBlock$, 'div', { class: 'blackout show' });

  if (actions && actions?.length > 0) {
    blackout$.style.cursor = 'pointer';
    blackout$.addEventListener('click', () => {
      actions.forEach((action) => action());
    });
  }
  const body$ = document.querySelector('body') as HTMLBodyElement;
  body$.prepend(fragment$);
  return blackout$;
};
