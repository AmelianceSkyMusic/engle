import { IUserPageWord } from '../../../types/interfaces';

interface IGameProps {
	words: IUserPageWord[];
}

export function Game({ words }: IGameProps) {
	console.log(words);
	return (
		<>
			<div>
				<h1 className="h1">
					{words[0].group}
				</h1>
			</div>
			<div>
				<h1 className="h1">
					{words[0].page}
				</h1>
			</div>
		</>
	);
}
