import '../../../../styles/pages/games/start-screen.scss';
import '../../../../styles/pages/games/audiocall.scss';

import { useEffect, useState } from 'react';
import { Footer } from '../../../components/layouts/Footer';
import { Header } from '../../../components/layouts/Header';
import { Game } from './Game';
import { StartScreen } from '../StartScreen';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { IUserPageWord } from '../../../types/interfaces';
import { getWordsAction } from '../../../store/reducers/words/actions/getWordsAction';
import { useTypedDispatch } from '../../../store/hooks/useTypedDispatch';
import { Loader } from '../../../../asmlib/asm-ui/components/Loader';

interface IAudiocallProps {
	groupNumber?: number;
	pageNumber?: number;
}

export function Audiocall({ groupNumber = -1, pageNumber = -1 }: IAudiocallProps) {
	const dispatch = useTypedDispatch();

	const { userPageWords, isLoading, error } = useTypedSelector((state) => state.words);
	const [startGameParam, setStartGameParam] = useState({ groupNumber, pageNumber });
	const [isStartGame, setIsStartGame] = useState(false);
	const [words, setWords] = useState<IUserPageWord[]>(userPageWords);

	useEffect(() => {

		console.log(startGameParam);
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
		<div className="page-container page-audiocall start-screen">
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
										<h1 className="title__heading h1">Игра «Аудиовызов»</h1>
										<p className="title__description p1">
											Тренировка слуха.
											<br />
											Прослушайте слово и выберите правильный вариант
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
