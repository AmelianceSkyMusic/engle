import { useState, useEffect } from 'react';

export const useValidation = (
	value: string,
	validations:{[key:string]: string|number|boolean},
	pass?: string,
) => {
	const [isEmpty, setEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordMatch, setPasswordMatch] = useState(false);
	const [inputValid, setInputValid] = useState(false);

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
				} else if (validation === 'isEmail') {
					// eslint-disable-next-line no-useless-escape
					const re = /\S+@\S+\.\S+/;
					// eslint-disable-next-line no-unused-expressions
					re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
				}	else if (validation === 'isPasswordMatch') {
					// eslint-disable-next-line no-unused-expressions
					Object.is(value, pass) ? setPasswordMatch(false) : setPasswordMatch(true);
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
