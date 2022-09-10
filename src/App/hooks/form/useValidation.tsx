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
			Object.entries(validations).forEach((el) => {
				if (el[0] === 'minLength') {
					if (value.length < el[1]) {
						setMinLengthError(true);
					} else {
						setMinLengthError(false);
					}
				} else if (el[0] === 'isEmpty') {
					if (value) {
						setEmpty(false);
					} else {
						setEmpty(true);
					}
				} else if (el[0] === 'isEmail') {
					const re = /\S+@\S+\.\S+/;
					if (re.test(String(value).toLowerCase())) {
						setEmailError(false);
					} else {
						setEmailError(true);
					}
				}	else if (el[0] === 'isPasswordMatch') {
					if (Object.is(value, pass)) {
						setPasswordMatch(false);
					} else {
						setPasswordMatch(true);
					}
				}
			});
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
