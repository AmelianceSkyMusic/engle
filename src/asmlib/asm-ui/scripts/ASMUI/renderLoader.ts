import { createHTMLElem } from '../../../asm-scripts';

export const renderLoader = (parent$: HTMLElement) => {
  const fragment$: DocumentFragment = new DocumentFragment();

  const loader$ = createHTMLElem(fragment$, 'div', { class: 'loader' });
  createHTMLElem(loader$, 'div', { class: '' });
  createHTMLElem(loader$, 'div', { class: '' });
  createHTMLElem(loader$, 'div', { class: '' });

  parent$.append(fragment$);
};
