import { useNavigate } from 'react-router-dom';
import { Modal } from '../../../../asmlib/asm-ui/components/Modal';
import { updateStatistic } from '../../../API/users/statistic/updateStatistics';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { IAudioCall } from '../../../types/interfaces';

interface IModalResultProps {
	result: Partial<IAudioCall>;
}

export function ModalResult({ result }: IModalResultProps) {
	const { userId } = useTypedSelector((state) => state.user);

	const resultMain = {
		newWords: {},
		countNewWords: 0,
		countShowedWords: Number(result.countRight || 0) + Number(result.countWrong || 0),
		countRight: result.countRight || 0,
		countWrong: result.countWrong || 0,
		topRight: 0, // TODO: count max right session
	};
	updateStatistic(userId, 'audioCall', resultMain);
	const navigate = useNavigate();
	function modalHandler(path: string) {
		setTimeout(() => {
			navigate(path);
		}, 0);
		navigate('/');
	}
	return (
		<Modal
			size="large"
			type="alert"
			heading="Вот:"
			setOpen={() => modalHandler('/')}
			mainButton={{ text: 'Закрыть', callback: () => modalHandler('/') }}
			secondButton={{ text: 'Повторить', callback: () => modalHandler('/audiocall') }}
		>
			<div style={{
				display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'calc(var(--col-gap) / 2)', padding: '0 calc(var(--col-gap) / 2)',
			}}
			>
				<h4 style={{ textAlign: 'center', color: 'var(--color--a3-0' }} className="h4">{`Правильно: ${result.countRight || 0}`}</h4>
				<h4 style={{ textAlign: 'center', color: 'var(--color--a5-0' }} className="h4">{`Неправильно: ${result.countWrong || 0}`}</h4>
			</div>
		</Modal>
	);
}
