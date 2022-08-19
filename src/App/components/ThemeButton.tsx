import { useEffect, useState } from 'react';
import { addChangeThemeListener } from '../../asmlib/asm-ui/scripts';

export function ThemeButton() {
	const [theme, setTheme] = useState('dark');
	useEffect(() => {
		const themeButton$ = document.querySelector('.theme-button') as HTMLButtonElement;
		addChangeThemeListener(themeButton$, 'light');
	});
	return (
		<button
			type="button"
			className="button button-icon theme-button"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{ theme === 'light' ? '☼' : '☽' }
		</button>
	);
}
