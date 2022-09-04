import '../../../../styles/pages/games/start-screen.scss';
import '../../../../styles/pages/games/sprint.scss';

import { useEffect, useState } from 'react';
import { Footer } from '../../../components/layouts/Footer';
import { Header } from '../../../components/layouts/Header';
import { Game } from './Game';
import { StartScreen } from '../StartScreen';

interface ISprintProps {
	groupNumber?: number;
	pageNumber?: number;
}

export function Sprint({ groupNumber = -1, pageNumber = -1 }: ISprintProps) {

	const [startGameParam, setStartGameParam] = useState({ groupNumber, pageNumber });
	const [isStartGame, setIsStartGame] = useState(false);

	useEffect(() => {
		if (startGameParam.groupNumber >= 0 && startGameParam.pageNumber >= 0) {
			setIsStartGame(true);
		}
	}, [startGameParam]);

	return (
		<div className="page-container page-sprint start-screen">
			<Header />
			<main className="main">
				<div className="container row">
					{isStartGame
						? (
							<Game
								groupNumber={startGameParam.groupNumber}
								pageNumber={startGameParam.pageNumber}
							/>
						)
						: (
							<StartScreen
								setStartGameParam={setStartGameParam}
								groupNumber={groupNumber}
								pageNumber={pageNumber}
							>
								<>
									<h1 className="title__heading h1">Игра «Спринт»</h1>
									<p className="title__description p1">
										Тренировка на знание слов.
										<br />
										Дайте ответ, соответствует ли слово переводу
									</p>
								</>
							</StartScreen>
						)}
				</div>
			</main>
			<Footer />
		</div>
	);
}
