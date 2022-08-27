import '../../styles/pages/login.scss';
import '../../styles/entities/log-reg-form.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
// import { InputEmail } from '../components/inputs/InputEmail';
// import { InputPassword } from '../components/inputs/InputPassword';
import API from '../API';

function createNewAxiosToLogin(mail: string, pass: string) {
	console.log(mail, pass);
	API.signIn(mail, pass)
		.then((response) => {
			localStorage.setItem('refreshToken', `${response.refreshToken}`);
			localStorage.setItem('token', `${response.token}`);
		})
		.catch((err) => alert(err.response.data));
}

const useValidation = (value: string, validations:{[key:string]: string|number|boolean}) => {
	const [isEmpty, setEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(false);

	useEffect(() => {
		function validat() {
			for (const validation in validations) {
				if (validation === 'minLength') {
					// eslint-disable-next-line no-unused-expressions
					value.length < ((validations[validation]) as number) ? setMinLengthError(true)
						: setMinLengthError(false);
				} else if (validation === 'isEmpty') {
					// eslint-disable-next-line no-unused-expressions
					value ? setEmpty(false) : setEmpty(true);
				}
			}
		}
		validat();
	}, [validations, value]);

	return {
		isEmpty,
		minLengthError,
	};
};

const useInput = (initialValue: string, validations:{[key:string]: string|number|boolean}) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setDirty] = useState(false);
	const valid = useValidation(value, validations);

	const onChange = (e: React.SyntheticEvent<EventTarget>) => {
		setValue((e.target as HTMLInputElement).value);
	};

	const onBlur = (e: React.SyntheticEvent<EventTarget>) => {
		setDirty(true);
	};

	return {
		value,
		onChange,
		onBlur,
		isDirty,
		...valid,
	};
};

export function Login() {
	// const [state, setState] = useState({
	// 	isEMail: '', isPassword: '',
	// });
	const mail = useInput('', { isEmpty: true, minLength: 8 });
	const password = useInput('', { isEmpty: true, minLength: 8 });

	// const handleChange = (e:React.FormEvent) => {
	// 	const input = (e.target as HTMLInputElement).name;
	// 	const { value } = e.target as HTMLInputElement;
	// 	switch (input) {
	// 	case 'email':
	// 		setState({ ...state, isEMail: value });
	// 		break;
	// 	case 'password':
	// 		setState({ ...state, isPassword: value });
	// 		break;
	// 	default:
	// 		console.log('unknown option');
	// 		break;
	// 	}
	// };

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		// createNewAxiosToLogin(state.isEMail, state.isPassword);
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
						<form action="" className="login__log-reg-form log-reg-form" onSubmit={onSubmit} noValidate>
							{/* <InputEmail /> */}
							<label htmlFor="email">
								<p className="p2">E-mail*:</p>
								<input value={mail.value} onChange={(e) => mail.onChange(e)} onBlur={(e) => mail.onBlur(e)} name="email" type="email" placeholder="Введите электронную почту" />
								{(mail.isDirty && mail.isEmpty) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Введите почту, поле пустое</p>}
							</label>
							{/* <InputPassword /> */}
							<label htmlFor="password">
								<p className="p2">Пароль*:</p>
								<input onChange={(e) => password.onChange(e)} onBlur={(e) => password.onBlur(e)} value={password.value} name="password" type="password" placeholder="Введите пароль" />
								{(password.isDirty && password.isEmpty) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Введите пароль, поле пустое</p>}
								{(password.isDirty && password.minLengthError) && <p className="p2" style={{ color: 'var(--color--a5-0)' }}>Не валидная длина</p>}
							</label>
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
