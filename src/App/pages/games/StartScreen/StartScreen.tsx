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
	children: JSX.Element;
}

export function StartScreen({
	setStartGameParam, groupNumber, pageNumber, children,
}: IStartScreenProps) {

	return (
		<>
			<div className="title row">
				{children}
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
