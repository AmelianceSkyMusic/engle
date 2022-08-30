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
			secondButton={{
				callback: () => console.log('yes'), text: 'Ну, ок!', icon: 'icon--arrow-right', iconPosition: 'left',
			}}

		>
			<div style={{
				display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'calc(var(--col-gap) / 2)', padding: '0 calc(var(--col-gap) / 2)',
			}}
			>
				<h4 style={{ display: 'flex', textAlign: 'center' }} className="h4">Не удалось загрузить контент!</h4>
				<p style={{ display: 'flex', textAlign: 'center' }} className="p1">Кажись не правильный адрес!</p>
			</div>
		</Modal>
	);
}
