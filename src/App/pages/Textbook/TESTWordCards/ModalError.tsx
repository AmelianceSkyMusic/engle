import { Modal } from '../../../../asmlib/asm-ui/components/Modal';

interface IModalError {
	setOpenErrorModal: (openErrorModal: boolean) => void;
}

export function ModalError({ setOpenErrorModal }: IModalError) {
	return (
		<Modal
			size="flex"
			type="error"
			setOpen={setOpenErrorModal}
			mainButton={{
				text: '¯\\_(ツ)_/¯',
			}}

		>
			<div style={{
				display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'calc(var(--col-gap) / 2)', padding: '0 calc(var(--col-gap) / 2)',
			}}
			>
				<h4 style={{ textAlign: 'center' }} className="h4">Не удалось загрузить контент!</h4>
				<p style={{ textAlign: 'center' }} className="p1">Кажись не правильный адрес! </p>
			</div>
		</Modal>
	);
}
