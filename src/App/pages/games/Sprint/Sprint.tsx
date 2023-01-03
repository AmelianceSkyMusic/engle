import '../../../../styles/pages/games/start-screen.scss';
import '../../../../styles/pages/games/sprint.scss';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../../components/layouts/Header';
import { Game } from './Game';
import { StartScreen } from '../StartScreen';
import { useTypedDispatch } from '../../../store/hooks/useTypedDispatch';
import { getWordsAction } from '../../../store/reducers/words/actions/getWordsAction';

export function Sprint() {
	const location = useLocation();
	let groupNumber = -1;
	let pageNumber = -1;
	interface ILocationState {
		groupNumber: number;
		pageNumber: number;
	}
	if (location.state) {
		groupNumber = (location.state as ILocationState).groupNumber;
		pageNumber = (location.state as ILocationState).pageNumber;
	}

	const dispatch = useTypedDispatch();

	const [startGameParam, setStartGameParam] = useState({ groupNumber: -1, pageNumber: -1 });
	const [isStartGame, setIsStartGame] = useState(false);

	useEffect(() => {
		if (startGameParam.groupNumber >= 0 && startGameParam.pageNumber >= 0) {
			dispatch(getWordsAction(startGameParam.groupNumber, startGameParam.pageNumber));
			setIsStartGame(true);
		}
	}, [startGameParam, dispatch]);

	return (
		<div className="page-container page-sprint start-screen">
			<Header />
			<main className="main">
				<div className="container row">
					{isStartGame
						? (
							<Game />
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
		</div>
	);
}
