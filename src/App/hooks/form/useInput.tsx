import { useState } from 'react';
import { useValidation } from './useValidation';

const useInput = (
	initialValue: string,
	validations:{[key:string]: string|number|boolean},
	pass?:string,
) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setDirty] = useState(false);
	const valid = useValidation(value, validations, pass);

	const onChange = (e: React.SyntheticEvent<EventTarget>) => {
		setValue((e.target as HTMLInputElement).value);
	};

	const onBlur = () => {
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

export { useInput };
