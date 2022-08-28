import '../../styles/pages/login.scss';
import '../../styles/entities/log-reg-form.scss';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import API from '../API';
import { useInput } from '../hooks/form/useInput';
import { Modal } from '../../asmlib/asm-ui/components/Modal';

export function Login() {
	const mail = useInput('', { isEmpty: true, isEmail: true });
	const password = useInput('', { isEmpty: true, minLength: 8 });
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [openErrorModal, setOpenErrorModal] = useState(error);
	const [openSuccessModal, setOpenSuccessModal] = useState(success);
	const [ErrorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const openModalError = () => {
		setError(false);
	};

	const openModalSuccess = () => {
		setSuccess(false);
	};

	useEffect(() => {
		setOpenErrorModal(!error);
	}, [error]);

	useEffect(() => {
		setOpenSuccessModal(!success);
	}, [success]);

	async function createNewAxiosToLogin(email: string, pass: string) {
		const loginUser = await API.signIn(email, pass)
			.catch((err) => {
				setError(true);
				setErrorMessage(`${err.response.data}`);
			});
		if (loginUser) {
			setSuccess(true);
			setSuccessMessage('Вы успешно авторизовались');
			localStorage.setItem('refreshToken', `${loginUser.refreshToken}`);
			localStorage.setItem('token', `${loginUser.token}`);
			const user = {
				userId: `${loginUser.userId}`,
				userName: `${loginUser.name}`,
				userEmail: `${email}`,
				isLogged: true,
			};
			localStorage.setItem('user', JSON.stringify(user));
			// 	// зміна в редаксі поля логіну
			// 	// запис отриманих токенів
		}
	}

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		createNewAxiosToLogin(mail.value, password.value);
	};
	return (
		<div className="page-container page-login">
			<div className="decoration decoration_type2" />
			<Header />
			<main className="main">
				<div className="container row">
					<div className="login col-6 col-lg-12">
						<h1 className="login__heading h1">Вход</h1>
						{error && (
							<Modal setOpen={openModalError} type="error" heading="Error">
								<>
									<h4 className="h4">Ошибка при попытке регистрации</h4>
									<p className="p1">{ErrorMessage}</p>
								</>
							</Modal>
						)}
						{success && (
							<Modal setOpen={openModalSuccess} type="success" heading="Success">
								<h4 className="h4">{successMessage}</h4>
							</Modal>
						)}
						<form action="" className="login__log-reg-form log-reg-form" onSubmit={onSubmit} noValidate>
							<label htmlFor="email">
								<p className="p2">E-mail*:</p>
								<input value={mail.value} onChange={(e) => mail.onChange(e)} onBlur={() => mail.onBlur()} name="email" type="email" placeholder="Введите электронную почту" />
								{(mail.isDirty && mail.isEmpty) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Введите почту, поле не может бить пустим</p>}
								{(mail.isDirty && mail.emailError) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Некорректная почта, проверьте свои данные</p>}
							</label>
							<label htmlFor="password">
								<p className="p2">Пароль*:</p>
								<input onChange={(e) => password.onChange(e)} onBlur={() => password.onBlur()} value={password.value} name="password" type="password" placeholder="Введите пароль" />
								{(password.isDirty && password.isEmpty) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Введите пароль, поле не может бить пустим</p>}
								{(password.isDirty && password.minLengthError) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Не валидная длина пароля</p>}
							</label>
							<button disabled={!mail.inputValid || !password.inputValid} type="submit" className="button">Войти</button>
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
