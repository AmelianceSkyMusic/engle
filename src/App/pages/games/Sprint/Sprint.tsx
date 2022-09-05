import '../../../../styles/pages/games/start-screen.scss';
import '../../../../styles/pages/games/sprint.scss';

import { useEffect, useState } from 'react';
import { Footer } from '../../../components/layouts/Footer';
import { Header } from '../../../components/layouts/Header';
import { Game } from './Game';
import { StartScreen } from '../StartScreen';
import { useTypedDispatch } from '../../../store/hooks/useTypedDispatch';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { getWordsAction } from '../../../store/reducers/words/actions/getWordsAction';
import { IUserPageWord } from '../../../types/interfaces';
import { Loader } from '../../../../asmlib/asm-ui/components/Loader';

interface ISprintProps {
	groupNumber?: number;
	pageNumber?: number;
}

export function Sprint({ groupNumber = -1, pageNumber = -1 }: ISprintProps) {
	const dispatch = useTypedDispatch();

	const { userPageWords, isLoading, error } = useTypedSelector((state) => state.words);
	const [startGameParam, setStartGameParam] = useState({ groupNumber: -1, pageNumber: -1 });
	const [isStartGame, setIsStartGame] = useState(false);
	const [words, setWords] = useState<IUserPageWord[]>(userPageWords);

	useEffect(() => {
		if (startGameParam.groupNumber >= 0 && startGameParam.pageNumber >= 0) {
			dispatch(getWordsAction(startGameParam.groupNumber, startGameParam.pageNumber));
		}
	}, [dispatch, startGameParam]);

	useEffect(() => {
		setWords(userPageWords);
		if (words.length > 0) {
			setIsStartGame(true);
		}
	}, [userPageWords, words]);

	return (
		<div className="page-container page-sprint start-screen">
			<Header />
			<main className="main">
				<div className="container row">
					{ /* eslint-disable-next-line no-nested-ternary */ }
					{ isLoading
						? <Loader />
						: (isStartGame
							? (
								<Game
									words={words}
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
							)
						)}
				</div>
			</main>
			<Footer />
		</div>
	);
}
