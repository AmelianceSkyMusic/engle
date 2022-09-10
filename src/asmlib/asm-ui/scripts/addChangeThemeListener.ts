const toggleTheme = () => {
	document.body.classList.add('no-transition');

	const currentTheme$ = document.documentElement.getAttribute('data-theme');

	let targetTheme = 'light';
	if (currentTheme$ === 'light') targetTheme = 'dark';
	document.documentElement.setAttribute('data-theme', targetTheme);

	setTimeout(() => document.body.classList.remove('no-transition'), 0);

	localStorage.setItem('theme', targetTheme);
};

export function addChangeThemeListener<TYPE extends HTMLElement>(element: TYPE, defaultTheme: 'light' | 'dark') {
	const storedTheme = localStorage.getItem('theme') || defaultTheme;

	if (storedTheme) document.documentElement.setAttribute('data-theme', storedTheme);

	element.addEventListener('click', toggleTheme);
}
