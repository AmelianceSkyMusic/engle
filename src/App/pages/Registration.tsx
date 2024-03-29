import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import '../../styles/pages/registration.scss';
import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import API from '../API';
import { useInput } from '../hooks/form/useInput';
import { Modal } from '../../asmlib/asm-ui/components/Modal';

export function Registration() {
	const [passToConfirm, setPassToConfirm] = useState('');
	const name = useInput('', { isEmpty: true });
	const mail = useInput('', { isEmpty: true, isEmail: true });
	const password = useInput('', { isEmpty: true, minLength: 8 });
	const passwordConfirm = useInput('', { isEmpty: true, minLength: 8, isPasswordMatch: true }, passToConfirm);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [, setOpenErrorModal] = useState(error);
	const [, setOpenSuccessModal] = useState(success);
	const [ErrorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	async function createNewAxiosToCreateNewUser(nameVal: string, mailVal: string, passVal: string) {
		const createUser = await API.createNewUser(nameVal, mailVal, passVal)
			.catch((err) => {
				setError(true);
				setErrorMessage(`${err.response.data}`);
			});
		if (createUser) {
			setSuccess(true);
			setSuccessMessage('Регистрация прошла успешно');
		}
	}

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (password.value === passwordConfirm.value) {
			createNewAxiosToCreateNewUser(name.value, mail.value, password.value);
		} else {
			setError(true);
			setErrorMessage('пароли не совпадают');
		}
	};

	const onChangeForm = (event: React.FormEvent) => {
		if ((event.target as HTMLInputElement).name === 'password') {
			setPassToConfirm((event.target as HTMLInputElement).value);
		}
	};

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

	const navigate = useNavigate();
	function handleClick(path: string) {
		navigate(path);
	}

	return (
		<div className="page-container page-registration">
			<div className="decoration decoration_type1" />
			<Header isHideRegistration />
			<main className="main">
				<div className="container row">
					<div className="register col-6 col-lg-12">
						<h1 className="register__heading h1">
							Регистрация
						</h1>
						{error && (
							<Modal setOpen={openModalError} type="error" heading="Error">
								<div className="modal__content">
									<h4 style={{ textAlign: 'center' }} className="h4">Ошибка при попытке регистрации</h4>
									<p style={{ textAlign: 'center' }} className="p1">{ErrorMessage}</p>
								</div>
							</Modal>
						)}
						{success && (
							<Modal setOpen={openModalSuccess} type="success" heading="Success" mainButton={{ callback: () => handleClick('/login'), text: 'К авторизации' }}>
								<div className="modal__content">
									<h4 style={{ textAlign: 'center' }} className="h4">{successMessage}</h4>
								</div>
							</Modal>
						)}
						<form action="" className="register__log-reg-form log-reg-form" onSubmit={onSubmit} onChange={onChangeForm} noValidate>
							<label htmlFor="name">
								<p className="p2">Имя*:</p>
								<input className="input text" value={name.value} onChange={(e) => name.onChange(e)} onBlur={() => name.onBlur()} name="name" type="text" placeholder="Введите имя" autoComplete="off" />
								{(name.isDirty && name.isEmpty) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Введите имя, поле не может быть пустым</p>}
							</label>
							<label htmlFor="email">
								<p className="p2">E-mail*:</p>
								<input className="input text" value={mail.value} onChange={(e) => mail.onChange(e)} onBlur={() => mail.onBlur()} name="email" type="email" placeholder="Введите электронную почту" />
								{(mail.isDirty && mail.isEmpty) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Введите почту, поле не может быть пустым</p>}
								{(mail.isDirty && mail.emailError) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Некорректная почта, проверьте свои данные</p>}
							</label>
							<label htmlFor="password">
								<p className="p2">Пароль*:</p>
								<input className="input text" onChange={(e) => password.onChange(e)} onBlur={() => password.onBlur()} value={password.value} name="password" type="password" placeholder="Введите пароль" />
								{(password.isDirty && password.isEmpty) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Введите пароль, поле не может быть пустым</p>}
								{(password.isDirty && password.minLengthError) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Пароль слишком короткий</p>}
							</label>
							<label htmlFor="password-confirm">
								<p className="p2">Подтвердите пароль*:</p>
								<input className="input text" onChange={(e) => passwordConfirm.onChange(e)} onBlur={() => passwordConfirm.onBlur()} value={passwordConfirm.value} name="password-confirm" type="password" placeholder="Введите пароль ещё раз" />
								{(passwordConfirm.isDirty && passwordConfirm.isEmpty) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Введите пароль, поле не может быть пустым</p>}
								{(passwordConfirm.isDirty && passwordConfirm.minLengthError) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Пароль слишком короткий</p>}
								{(passwordConfirm.isDirty && passwordConfirm.passwordMatch) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Пароли не совпадают</p>}
							</label>
							<button disabled={!mail.inputValid || !password.inputValid || !name.inputValid || !passwordConfirm.inputValid} type="submit" className="button">
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
