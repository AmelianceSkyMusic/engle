import { NavLink } from 'react-router-dom';

export function Navigation() {
	function getClass(isActive: boolean) {
		return isActive ? 'link navigation__item active' : 'link navigation__item';
	}
	return (
		<nav className="navigation">
			<NavLink className={({ isActive }) => getClass(isActive)} to="/">Главная</NavLink>
			<NavLink className={({ isActive }) => getClass(isActive)} to="/textbook">Учебник</NavLink>
			<NavLink className={({ isActive }) => getClass(isActive)} to="/audiocall">«Аудиовызов»</NavLink>
			<NavLink className={({ isActive }) => getClass(isActive)} to="/sprint">«Спринт»</NavLink>
			<NavLink className={({ isActive }) => getClass(isActive)} to="/statistics">Статистика</NavLink>
		</nav>
	);
}
