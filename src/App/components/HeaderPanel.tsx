import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../asmlib/asm-ui/components/Button';
import { ThemeButton } from '../../asmlib/asm-ui/components/ThemeButton';
import { useTypedDispatch } from '../store/hooks/useTypedDispatch';
import { useTypedSelector } from '../store/hooks/useTypedSelector';
import { getUserAction } from '../store/reducers/user/actions/getUserAction';
import { setUserAction } from '../store/reducers/user/actions/setUserAction';
import { MenuSide } from './MenuSide';
import { Navigation } from './Navigation';

export interface IHeaderPanelProps {
	isHideRegistration?: boolean;
}

export function HeaderPanel({ isHideRegistration }: IHeaderPanelProps) {
	const navigate = useNavigate();
	function handleClick(path: string) {
		navigate(path);
	}
	const dispatch = useTypedDispatch();
	const { isLogged } = useTypedSelector((state) => state.user);

	useEffect(() => {
		console.log('isLogged', isLogged);
		dispatch(getUserAction());
	}, [dispatch, isLogged]);

	function handlerLogOut() {
		localStorage.removeItem('user');
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('token');
		dispatch(setUserAction({ isLogged: false }));
	}

	const isScreenLg = useMediaQuery({ query: '(max-width: 960px)' });

	const	[showMenu, setOpenMenu] = useState(false);

	console.log('isHideRegistration', isHideRegistration);

	return (
		<div className="header-panel row">
			<div className="header-panel__logo col-2 col-lg-5">
				<a href="/" className="logo">{}</a>
			</div>
			<nav className="header-panel__navigation col-10 col-lg-7">
				{!isScreenLg
					? <Navigation />
					: <button type="button" className="icon click icon--menu" onClick={() => setOpenMenu(true)}>{}</button>}
				<div className="header-panel__buttons">
					<ThemeButton />
					{!isHideRegistration && (isLogged
						? <Button type="secondary" callback={() => handlerLogOut()}>Выйти</Button>
						: <Button callback={() => handleClick('/login')}>Войти</Button>)}
				</div>
			</nav>
			{(showMenu && isScreenLg)
			&& <MenuSide setOpenMenu={setOpenMenu} />}
		</div>
	);
}
