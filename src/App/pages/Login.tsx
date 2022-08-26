import '../../styles/pages/login.scss';
import '../../styles/entities/log-reg-form.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import { InputEmail } from '../components/inputs/InputEmail';
import { InputPassword } from '../components/inputs/InputPassword';
import API from '../API';

function createNewAxiosToLogin(mail: string, pass: string) {
	API.signIn(mail, pass)
		.then((response) => {
			localStorage.setItem('refreshToken', `${response.refreshToken}`);
			localStorage.setItem('token', `${response.token}`);
		})
		.catch((err) => alert(err.response));
}

export function Login() {
	const [state, setState] = useState({
		isEMail: '', isPassword: '',
	});

	const handleChange = (e:React.FormEvent) => {
		const input = (e.target as HTMLInputElement).name;
		const { value } = e.target as HTMLInputElement;
		switch (input) {
		case 'email':
			setState({ ...state, isEMail: value });
			break;
		case 'password':
			setState({ ...state, isPassword: value });
			break;
		default:
			console.log('unknown option');
			break;
		}
	};

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		createNewAxiosToLogin(state.isEMail, state.isPassword);
	};

	return (
		<div className="page-container page-login">
			<div className="decoration decoration_type2" />
			<Header />
			<main className="main">
				<div className="container row">
					<div className="login col-6 col-lg-12">
						<h1 className="login__heading h1">Вход</h1>
						<form action="" className="login__log-reg-form log-reg-form" onChange={handleChange} onSubmit={onSubmit}>
							<InputEmail />
							<InputPassword />
							<button type="submit" className="button">Войти</button>
						</form>
						<p className="p2">
							Нет аккаунта? Вы можете
							{' '}
							<Link className="link link_underlined" to="/registration">зарегистрироваться</Link>
						</p>
					</div>
					<div className="mascot page-login__mascot col-6 col-lg-12">
						<div className="mascot__img mascot__img_wizard" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
