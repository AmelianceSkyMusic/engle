import { useState, useEffect } from 'react';

export const useValidation = (
	value: string,
	validations: { [key: string]: string | number | boolean },
	pass?: string,
) => {
	const [isEmpty, setEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordMatch, setPasswordMatch] = useState(false);
	const [inputValid, setInputValid] = useState(false);

	useEffect(() => {
		function validat() {
			// TODO: DIMA FIX THIS
			// eslint-disable-next-line no-restricted-syntax
			for (const validation in validations) {
				if (validation === 'minLength') {
					if (value.length < (validations[validation])) {
						setMinLengthError(true);
					} else {
						setMinLengthError(false);
					}
				} else if (validation === 'isEmpty') {
					if (value) {
						setEmpty(false);
					} else {
						setEmpty(true);
					}
				} else if (validation === 'isEmail') {
					const re = /\S+@\S+\.\S+/;
					if (re.test(String(value).toLowerCase())) {
						setEmailError(false);
					} else {
						setEmailError(true);
					}
				}	else if (validation === 'isPasswordMatch') {
					if (Object.is(value, pass)) {
						setPasswordMatch(false);
					} else {
						setPasswordMatch(true);
					}
				}
			}
		}
		validat();
	}, [validations, value, pass]);

	useEffect(() => {
		if (isEmpty || minLengthError || emailError || passwordMatch) {
			setInputValid(false);
		} else {
			setInputValid(true);
		}
	}, [isEmpty, minLengthError, emailError, passwordMatch]);

	return {
		isEmpty,
		minLengthError,
		emailError,
		passwordMatch,
		inputValid,
	};
};
