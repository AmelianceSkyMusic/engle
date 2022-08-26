import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/pages/registration.scss';
import { InputEmail } from '../components/inputs/InputEmail';
import { InputPassword } from '../components/inputs/InputPassword';
import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import API from '../API';

async function createNewAxiosToCreateNewUser(name:string, mail: string, pass: string) {
	await API.createNewUser(name, mail, pass)
		.catch((err) => alert(err.response.data));
	await API.signIn(mail, pass).catch((err) => alert(err.response.data));
}

export function Registration() {
	const [state, setState] = useState({
		isName: '', isEMail: '', isPassword: '', isPasswordConfirm: '',
	});

	const handleChangeForm = (e: React.SyntheticEvent<EventTarget>) => {
		const input = (e.target as HTMLInputElement).name;
		const { value } = e.target as HTMLInputElement;
		switch (input) {
		case 'email':
			setState({ ...state, isEMail: value });
			break;
		case 'name':
			setState({ ...state, isName: value });
			break;
		case 'password':
			setState({ ...state, isPassword: value });
			break;
		case 'password-confirm':
			setState({ ...state, isPasswordConfirm: value });
			break;
		default:
			console.log('unknown option');
			break;
		}
	};

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log(state);
		if (state.isPassword === state.isPasswordConfirm) {
			createNewAxiosToCreateNewUser(state.isName, state.isEMail, state.isPassword);
		} else {
			alert('пароли не сопвпадают');
		}
	};
	return (
		<div className="page-container page-registration">
			<div className="decoration decoration_type1" />
			<Header />
			<main className="main">
				<div className="container row">
					<div className="register col-6 col-lg-12">
						<h1 className="register__heading h1">
							Регистрация
						</h1>
						<form action="" className="register__log-reg-form log-reg-form" onSubmit={onSubmit} onChange={handleChangeForm}>
							<label htmlFor="name">
								<p className="p2">Имя*:</p>
								<input required name="name" type="text" placeholder="Введите имя" autoComplete="off" />
							</label>
							<InputEmail />
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
					<div className="mascot page-registration__mascot col-6 col-lg-12">
						<div className="mascot__img mascot__img_mailman" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
