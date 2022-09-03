import '../../../../styles/pages/games/start-screen.scss';
import '../../../../styles/pages/games/audiocall.scss';

import { useEffect, useState } from 'react';
import { Footer } from '../../../components/layouts/Footer';
import { Header } from '../../../components/layouts/Header';
import { Game } from './Game';
import { StartScreen } from '../StartScreen';

interface IAudiocallProps {
	groupNumber?: number;
	pageNumber?: number;
}

export function Audiocall({ groupNumber = -1, pageNumber = -1 }: IAudiocallProps) {

	const [startGameParam, setStartGameParam] = useState({ groupNumber, pageNumber });
	const [isStartGame, setIsStartGame] = useState(false);

	useEffect(() => {
		if (startGameParam.groupNumber >= 0 && startGameParam.pageNumber >= 0) {
			setIsStartGame(true);
		}
	}, [startGameParam]);

	return (
		<div className="page-container page-audiocall start-screen">
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
							/>
						)}
				</div>
			</main>
			<Footer />
		</div>
	);
}
