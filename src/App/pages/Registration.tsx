import { Link } from 'react-router-dom';
import '../../styles/pages/registration.scss';
import { InputEmail } from '../components/inputs/InputEmail';
import { InputPassword } from '../components/inputs/InputPassword';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';

export function Registration() {
	return (
		<div className="page-container page-registration">
			<div className="decoration decoration_type1" />
			<Header />
			<main className="main">
				<div className="container row">
					<div className="register col-6 col-lg-12">
						<h1 className="register__heading h2">
							Регистрация
						</h1>
						<form action="" className="register__log-reg-form log-reg-form">
							<InputEmail />
							<label htmlFor="name">
								<p className="p2">Имя*:</p>
								<input required name="name" type="text" placeholder="Введите имя" autoComplete="off" />
							</label>
							<InputPassword />
							<label htmlFor="password-confirm">
								<p className="p2">Подтвердите пароль*:</p>
								<input required name="password-confirm" type="password" placeholder="Введите пароль ещё раз" />
							</label>
							<button type="submit" className="button">
								Зарегистрироваться
							</button>
						</form>
						<p className="p2">
							Уже есть аккаунт? Да,
							{' '}
							<Link className="link link_underlined" to="/login">войти</Link>
						</p>
					</div>
					<div className="mailman-mascot col-6 col-lg-12">
						<div className="mailman-mascot__img" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
