import { Button } from './Button';

interface IModal {
	setOpen: (open: boolean) => void;
	type?: 'alert' | 'info' | 'success' | 'error' | 'warn';
	mainButton?: {
			text?: string;
			callback?: { () : void } | null;
			icon?: string;
			iconPosition?: 'left' | 'right';
		};
	secondButton?: {
			text?: string;
			callback: { () : void } | null;
			icon?: string;
			iconPosition?: 'left' | 'right';
		};
	children: JSX.Element;
	heading?: string;
	isHeading?: boolean;
	isButtons?: boolean;
	size?: 'flex' | 'large';
}

export function Modal({
	setOpen,
	children,
	heading,
	size = 'flex',
	type = 'alert',
	mainButton = { callback: null },
	secondButton = { callback: null },
	isHeading = true,
	isButtons = true,
}: IModal) {
	function closeModal() {
		const modalBlock$ = document.querySelector('#modal') as HTMLElement;
		const blackout$ = modalBlock$.querySelector('.blackout') as HTMLElement;
		blackout$.classList.remove('show');
		const modal$ = modalBlock$.querySelector('.modal') as HTMLElement;
		modal$.classList.remove('show');
		blackout$.addEventListener('animationend', () => {
			setOpen(false);
		});
	}
	console.log(mainButton.icon);

	let mainButtonLabel = mainButton.text ?? 'Close';
	let mainButtonClass: 'button' | 'button-icon' = 'button';
	if (mainButton?.text?.length === 0) {
		mainButtonClass = 'button-icon';
		mainButtonLabel = '';
	}
	let socondButtonLabel = secondButton.text ?? 'Ok';
	let secondButtonClass: 'button' | 'button-icon' = 'button';
	if (secondButton?.text?.length === 0) {
		secondButtonClass = 'button-icon';
		socondButtonLabel = '';
	}

	const headingTypeClass = `modal__heading ${type}`;

	function mainButtonHandler() {
		if (mainButton.callback) mainButton.callback();
		closeModal();
	}

	function secondButtonHandler() {
		if (secondButton.callback) secondButton.callback();
		closeModal();
	}

	let modalClassNames = 'modal show';
	if (size === 'large') modalClassNames = `modal show ${size}`;

	return (
		<div className="zero-block" id="modal">
			<button
				type="button"
				className="blackout show"
				style={{ cursor: 'pointer' }}
				onClick={closeModal}
			>
				{}

			</button>
			<div className={modalClassNames}>
				{isHeading
					&& (
						<div className={headingTypeClass}>
							<h4 className="h4">
								{(!heading && type === 'alert') && 'УВЕДОМНЕЛИЕ!'}
								{(!heading && type === 'error') && 'ОШИБКА!'}
								{(!heading && type === 'warn') && 'ВНИМАНИЕ!'}
								{(!heading && type === 'info') && 'ІНФОРМАЦИЯ!'}
								{(!heading && type === 'success') && 'УСПЕХ!'}
								{heading && heading}
							</h4>
						</div>
					)}
				<div className="modal__content scroll">
					{children}
				</div>
				{isButtons
				&& (
					<div className="modal__button">
						{secondButton.callback && (
							<Button
								buttonClass={secondButtonClass}
								icon={secondButton.icon}
								iconPosition={secondButton.iconPosition === 'right' ? 'right' : 'left'}
								type="secondary"
								callback={() => secondButtonHandler()}
							>
								{socondButtonLabel}
							</Button>
						)}
						<Button
							buttonClass={mainButtonClass}
							icon={mainButton.icon}
							iconPosition={secondButton.iconPosition === 'right' ? 'right' : 'left'}
							callback={() => mainButtonHandler()}
						>
							{mainButtonLabel}
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
