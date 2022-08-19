import { Link, useNavigate } from 'react-router-dom';
import { ThemeButton } from './ThemeButton';

export function Navigation() {
	const navigate = useNavigate();

	function handleClick(path: string) {
		navigate(path);
	}

	return (
		<nav className="navigation row">
			<div className="navigation__logo col-1">
				<h3 className="h3">Engle</h3>
			</div>
			<nav className="navigation__menu col-11">
				<Link className="link" to="/">Главная</Link>
				<Link className="link" to="/textbook">Учебник</Link>
				<Link className="link" to="/audiocall">«Аудиовызов»</Link>
				<Link className="link" to="/sprint">«Спринт»</Link>
				<Link className="link" to="/statistics">Статистика</Link>
				<button type="button" className="button" onClick={() => handleClick('/login')}>
					Login
				</button>
				<ThemeButton />
			</nav>
		</nav>
	);
}
