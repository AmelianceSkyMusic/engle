interface IButton {
	children: string;
	callback: () => void;
	buttonClass?: 'button' | 'button-sm' | 'button-icon' | 'button-icon-sm';
	iconPosition?: 'left' | 'right';
	icon?: string | undefined;
	disabled?: boolean;
	type?: 'primary' | 'secondary';
	id?: string;
}

export function Button({
	children, callback, iconPosition, icon, id, buttonClass = 'button', type = 'primary', disabled = false,
}: IButton) {
	let iconClassName = '';
	if (buttonClass === 'button-icon' || buttonClass === 'button-icon-sm') {
		iconClassName = `icon center ${icon}`;
	}
	const buttonClassAndType = `${buttonClass} ${type}`;

	return (
		<button type="button" id={id} className={buttonClassAndType} onClick={callback} disabled={disabled}>
			{ (iconClassName.length === 0 && icon && iconPosition === 'left') && <span className={`icon left ${icon}`} /> }
			{ icon
				? <span className={iconClassName} />
				: <span className="label">{children}</span>}
			{ (iconClassName.length === 0 && icon && iconPosition === 'right') && <span className={`icon right ${icon}`} /> }
		</button>
	);
}
