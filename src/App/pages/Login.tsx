import '../../styles/pages/login.scss';
import '../../styles/entities/log-reg-form.scss';

import { Link } from 'react-router-dom';
import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import { InputEmail } from '../components/inputs/InputEmail';
import { InputPassword } from '../components/inputs/InputPassword';

export function Login() {
	return (
		<div className="page-container page-login">
			<div className="decoration page-login__decoration" />
			<Header {...{ logoOnly: true }} />
			<main className="main">
				<div className="container row">
					<div className="login col-6 col-lg-12">
						<h2 className="login__heading h2">Вход</h2>
						<form action="" className="login__log-reg-form log-reg-form">
							<InputEmail />
							<InputPassword />
							<button type="submit" className="button">Войти</button>
						</form>
						<p className="p2">
							Нет аккаунта? Вы можете
							{' '}
							<Link to="/registration">зарегистрироваться</Link>
						</p>
					</div>
					<div className="mascot-container col-6 col-lg-12">
						<div className="mascot" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
