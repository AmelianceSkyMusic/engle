interface IGameProps {
	groupNumber: number;
	pageNumber: number;
}

export function Game({ groupNumber, pageNumber }: IGameProps) {
	return (
		<>
			<div>
				<h1 className="h1">
					{groupNumber}
				</h1>
			</div>
			<div>
				<h1 className="h1">
					{pageNumber}
				</h1>
			</div>
		</>
	);
}
