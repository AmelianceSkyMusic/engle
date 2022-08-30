import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../asmlib/asm-ui/components/Button';
import { ThemeButton } from '../../asmlib/asm-ui/components/ThemeButton';
import { useTypedDispatch } from '../store/hooks/useTypedDispatch';
import { useTypedSelector } from '../store/hooks/useTypedSelector';
import { getUserIsLogged } from '../store/reducers/user/actions/getUserIsLogged';

export interface INavigationProps {
	logoOnly?: boolean;
}

function logOut() {
	console.log('я ушел');
	localStorage.removeItem('user');
	localStorage.removeItem('refreshToken');
	localStorage.removeItem('token');
}

export function Navigation({ logoOnly }: INavigationProps) {
	const navigate = useNavigate();
	function handleClick(path: string) {
		navigate(path);
	}
	const dispatch = useTypedDispatch();
	// dispatch(getUserIsLogged());
	const { isLogged } = useTypedSelector((state) => state.user);
	console.log(isLogged);

	return (
		<nav className="navigation row">
			<div className="navigation__logo col-2">
				<a href="/" className="logo">{}</a>
			</div>
			{!logoOnly
				&& (
					<nav className="navigation__menu col-10">
						<Link className="link" to="/">Главная</Link>
						<Link className="link" to="/textbook">Учебник</Link>
						<Link className="link" to="/audiocall">«Аудиовызов»</Link>
						<Link className="link" to="/sprint">«Спринт»</Link>
						<Link className="link" to="/statistics">Статистика</Link>
						<Button type="secondary" callback={() => logOut()}>Выйти</Button>
						<Button callback={() => handleClick('/login')}>Войти</Button>
						<ThemeButton />
					</nav>
				)}
		</nav>
	);
}
