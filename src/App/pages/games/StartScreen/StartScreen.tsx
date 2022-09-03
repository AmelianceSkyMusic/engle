import { Button } from '../../../../asmlib/asm-ui/components/Button';
import { Levels } from './Levels';

interface IStartScreenProps {
	setStartGameParam: ({
		groupNumber, pageNumber,
	}: {
		groupNumber: number; pageNumber: number;
	}) => void;
	groupNumber: number;
	pageNumber: number;
}

export function StartScreen({ setStartGameParam, groupNumber, pageNumber }: IStartScreenProps) {

	return (
		<>
			<div className="title row">
				<h1 className="title__heading h1">Игра «Аудиовызов»</h1>
				<p className="title__description p1">
					Тренировка слуха.
					<br />
					Прослушайте слово и выберите правильный вариант
				</p>
			</div>
			{((groupNumber >= 0) && (pageNumber >= 0))
				? (
					<div className="start-button row">
						<Button callback={() => setStartGameParam({ groupNumber, pageNumber })}>
							Начать игру
						</Button>
					</div>
				)
				: <Levels setStartGameParam={setStartGameParam} />}
		</>
	);
}
