import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../../../asmlib/asm-ui/components/Modal';
import { updateStatistic } from '../../../API/users/statistic/updateStatistics';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { IUserPageWord } from '../../../types/interfaces';
import { playAudio } from '../Audiocall/playAudio';

interface IModalResultProps {
	result: { right: IUserPageWord[]; wrong: IUserPageWord[]; topRight: number };
}

function playButtonAudio(event: React.MouseEvent) {
	const element$ = event.target as HTMLButtonElement;
	const id = element$.id.split('-')[1];

	const audio$ = document.querySelector(`#audio-${id}`) as HTMLAudioElement;
	audio$.pause();
	audio$.load();
	audio$.play();
}

export function ModalResult({ result }: IModalResultProps) {
	const { userId } = useTypedSelector((state) => state.user);

	const resultMain = {
		newWords: {},
		countNewWords: 0,
		countShowedWords: Number(result.right.length || 0) + Number(result.wrong.length || 0),
		countRight: result.right.length || 0,
		countWrong: result.wrong.length || 0,
		topRight: result.topRight || 0,
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
				display: 'flex', flexDirection: 'column', gap: 'calc(var(--col-gap) / 2)', padding: '0 calc(var(--col-gap) / 2)',
			}}
			>

				<div className="right">
					<h4
						style={{
							color: 'var(--color--a3-0', display: 'flex', flexDirection: 'column', gap: 'calc(var(--col-gap) / 2)',
						}}
						className="h4"
					>
						{`Правильно (${result.right.length || 0}):`}
					</h4>
					{result.right.map((word: IUserPageWord) => (
						<p key={word.id} className="p1" style={{ display: 'flex', gap: 'calc(var(--col-gap) / 4)' }}>
							<audio id={`audio-${word.id}`}>
								<track kind="captions" />
								<source src={`https://app-learnwords.herokuapp.com/${word.audio}`} type="audio/mpeg" />
							</audio>
							<button type="button" id={`bth-${word.id}`} className="icon click icon--sound" onClick={playButtonAudio}>{}</button>
							<b>
								{`${word.word} `}
							</b>
							{`${word.transcription} — ${word.wordTranslate}`}
						</p>
					))}
				</div>

				<div className="wrong">
					<h4
						style={{
							color: 'var(--color--a5-0', display: 'flex', flexDirection: 'column', gap: 'calc(var(--col-gap) / 2)',
						}}
						className="h4"
					>
						{`Неправильно (${result.wrong.length || 0}):`}
					</h4>
					{result.wrong.map((word: IUserPageWord) => (
						<p key={word.id} className="p1" style={{ display: 'flex', gap: 'calc(var(--col-gap) / 4)' }}>
							<audio id={`audio-${word.id}`}>
								<track kind="captions" />
								<source src={`https://app-learnwords.herokuapp.com/${word.audio}`} type="audio/mpeg" />
							</audio>
							<button type="button" id={`bth-${word.id}`} className="icon click icon--sound" onClick={playButtonAudio}>{}</button>
							<b>
								{`${word.word} `}
							</b>
							{`${word.transcription} — ${word.wordTranslate}`}
						</p>
					))}
				</div>

			</div>
		</Modal>
	);
}
