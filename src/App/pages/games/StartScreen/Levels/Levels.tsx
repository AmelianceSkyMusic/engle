import { getRandomNumber } from '../../../../../asmlib/asm-scripts';
import { Level } from './Level';

interface ILevelsProps {
	setStartGameParam: ({
		groupNumber, pageNumber,
	}: {
		groupNumber: number; pageNumber: number;
	}) => void;
}

export function Levels({ setStartGameParam }: ILevelsProps) {
	const randomPageNumber = getRandomNumber(0, 29);
	return (
		<div className="levels row">
			<div className="levels__heading-container col-12">
				<h3 className="levels__title h3">Выберите категорию:</h3>
			</div>
			<div className="levels__section row">
				<Level setStartGameParam={setStartGameParam} groupNumber={1} pageNumber={randomPageNumber} className="a1" level="A1" title="Beginner" />
				<Level setStartGameParam={setStartGameParam} groupNumber={2} pageNumber={randomPageNumber} className="b1" level="B1" title="Intermediate" />
				<Level setStartGameParam={setStartGameParam} groupNumber={3} pageNumber={randomPageNumber} className="c1" level="C1" title="Advanced" />
				<Level setStartGameParam={setStartGameParam} groupNumber={4} pageNumber={randomPageNumber} className="a2" level="A2" title="Elementary" />
				<Level setStartGameParam={setStartGameParam} groupNumber={5} pageNumber={randomPageNumber} className="b2" level="B2" title="Upper Intermediate" />
				<Level setStartGameParam={setStartGameParam} groupNumber={6} pageNumber={randomPageNumber} className="c2" level="C2" title="Proficiency" />
			</div>
		</div>
	);
}
