import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';

interface IMenuSideProps {
	setOpenMenu: (showMenu: boolean) => void;
}

export function MenuSide({ setOpenMenu }: IMenuSideProps) {

	(document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden';
	function closeMenu() {
		(document.querySelector('body') as HTMLBodyElement).style.overflow = 'visible';
		const zeroBlock$ = document.querySelector('#zero-block') as HTMLElement;
		const blackout$ = zeroBlock$.querySelector('.blackout') as HTMLElement;
		blackout$.classList.remove('show');
		const menuSide$ = zeroBlock$.querySelector('.menu-side') as HTMLElement;
		menuSide$.classList.remove('show');
		blackout$.addEventListener('animationend', () => {
			setOpenMenu(false);
		});
	}

	return (
		<div className="zero-block" id="zero-block">
			<button
				type="button"
				className="blackout show"
				style={{ cursor: 'pointer' }}
				onClick={closeMenu}
			>
				{}

			</button>
			<div
				className="menu-side show"
			>
				<Navigation />
				<button type="button" onClick={closeMenu} className="icon click icon--x-circle">{}</button>
			</div>
		</div>
	);
}
