import { useEffect, useState } from 'react';
import { addChangeThemeListener } from '../../asm-ui/scripts';

export function ThemeButton() {
	const [theme, setTheme] = useState('dark');
	useEffect(() => {
		const themeButton$ = document.querySelector('.theme-button') as HTMLButtonElement;
		addChangeThemeListener(themeButton$, 'light');
	});

	return (
		<button
			type="button"
			className={theme === 'dark' ? 'icon click icon--sun theme-button' : 'icon click icon--moon theme-button'}
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{}
		</button>
	);
}
