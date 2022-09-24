import {
	useCallback,
	useEffect, useMemo, useRef, useState,
} from 'react';
import { IUserPageWord } from '../../../types/interfaces';
import { shuffleArray } from '../../../../asmlib/asm-scripts/shuffleArray';
import { getRandomNumber } from '../../../../asmlib/asm-scripts';
import correctAnswerSound from '../../../../asmlib/asm-ui/assets/sounds/correct-answer.mp3';
import wrongAnswerSound from '../../../../asmlib/asm-ui/assets/sounds/wrong-answer.mp3';
import { ModalResult } from '../ModalResult';
import { changeUserWord } from '../../../API/users/words/changeUserWord';
import { Timer } from './Timer';
import { Loader } from '../../../../asmlib/asm-ui/components/Loader';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { useTypedDispatch } from '../../../store/hooks/useTypedDispatch';
import { getWordsAction } from '../../../store/reducers/words/actions/getWordsAction';

export function Game() {
	const dispatch = useTypedDispatch();
	const { userPageWords, isLoading } = useTypedSelector((state) => state.words);
	const shuffledWords = useMemo(() => shuffleArray(userPageWords), [userPageWords]);
	const [word, setWord] = useState<IUserPageWord>(shuffledWords[0]);
	const [translation, setTranslation] = useState('');

	useEffect(() => {
		if (shuffledWords.length > 0) {
			setWord(shuffledWords[0]);
		}
	}, [shuffledWords]);
	useEffect(() => {
		if (word) {
			const sameWordChance = getRandomNumber(1, 100);
			if (sameWordChance >= 45) {
				setTranslation(shuffledWords[getRandomNumber(0, 19)].wordTranslate);
			} else {
				setTranslation(word.wordTranslate);
			}
		}
	}, [shuffledWords, word]);

	const blinkerEl = useRef<HTMLDivElement>(null);
	function blink(color: 'red' | 'green') {
		if (blinkerEl.current) {
			blinkerEl.current.className = `blinker blinker_${color}`;
			blinkerEl.current.addEventListener('animationend', () => {
				(blinkerEl.current as HTMLDivElement).className = 'blinker';
			});
		}
	}

	const [result, setResult] = useState<
	{ right: IUserPageWord[]; wrong: IUserPageWord[]; topRight: number }
	>({ right: [], wrong: [], topRight: 0 });

	const [gameEnded, setGameEnded] = useState(false);
	const endGame = useCallback(() => {
		setGameEnded(true);
	}, []);

	const correctAnswerAudio = useMemo(() => {
		const audio = new Audio(correctAnswerSound);
		audio.preload = 'auto';
		return audio;
	}, []);
	const wrongAnswerAudio = useMemo(() => {
		const audio = new Audio(wrongAnswerSound);
		audio.preload = 'auto';
		return audio;
	}, []);

	const handleAnswer = useCallback((answer: boolean) => {
		function checkForNewWords() {
			const wordIdx = shuffledWords.indexOf(word);
			if (shuffledWords[wordIdx + 1]) {
				setWord(shuffledWords[wordIdx + 1]);
			} else if (word.page > 0) {
				dispatch(getWordsAction(word.group, word.page - 1));
			} else {
				endGame();
			}
		}

		if (answer === (word.wordTranslate === translation)) {
			blink('green');
			correctAnswerAudio.play();
			setResult({
				...result,
				right: [...result.right, word],
				topRight: result.topRight + 1,
			});
			changeUserWord(word.id, 'sprint', 'right');
		} else {
			blink('red');
			wrongAnswerAudio.play();
			setResult({
				...result,
				wrong: [...result.wrong, word],
			});
			changeUserWord(word.id, 'sprint', 'wrong');
		}
		checkForNewWords();
	}, [correctAnswerAudio, dispatch, endGame, result, shuffledWords,
		translation, word, wrongAnswerAudio]);

	useEffect(() => {
		function handleKeyboardAnswer(event: KeyboardEvent) {
			switch (event.key) {
			case 'ArrowLeft':
				handleAnswer(false);
				break;
			case 'ArrowRight':
				handleAnswer(true);
				break;
			default:
				break;
			}
		}
		if (!gameEnded) document.addEventListener('keydown', handleKeyboardAnswer);
		return () => document.removeEventListener('keydown', handleKeyboardAnswer);
	}, [handleAnswer, gameEnded]);

	return gameEnded
		? <ModalResult result={result} game="sprint" />
		: (
			<div className="sprint-game row">
				<div ref={blinkerEl} className="blinker" />
				<div className="sprint-game__col sprint-game__col_left col-4">
					<div className="sprint-game__check sprint-game__check_1  icon icon--check sprint-game__row-1" />
					<p className="sprint-game__curr-points p1 sprint-game__row-2">10 очков</p>
					<h3 className="sprint-game__eng-word h3 sprint-game__row-3">
						{
							isLoading
								?	(
									<div className="">
										...
										<Loader />
									</div>
								)

								: word?.word
						}
					</h3>
					<button
						type="button"
						className="sprint-game__wrong-btn button sprint-game__row-4"
						onClick={() => handleAnswer(false)}
					>
						<span className="icon icon--arrow-left" />
						Неверно
					</button>
				</div>
				<div className="sprint-game__col sprint-game__col_center col-4">
					<div className="sprint-game__check sprint-game__check_2 icon icon--check sprint-game__row-1" />
					<p className="sprint-game__coff p1 sprint-game__row-2">x2</p>
					<h3 className="sprint-game__question-mark h3 sprint-game__row-3">?</h3>
					<Timer onEndCallback={endGame} />
				</div>
				<div className="sprint-game__col sprint-game__col_right col-4">
					<div className="sprint-game__check sprint-game__check_3 icon icon--check sprint-game__row-1" />
					<p className="sprint-game__overall-points p1 sprint-game__row-2">Всего очков: 20</p>
					<h3 className="sprint-game__ru-word h3 sprint-game__row-3">
						{
							isLoading
								?	'...'
								: translation
						}
					</h3>
					<button
						type="button"
						className="sprint-game__correct-btn button sprint-game__row-4"
						onClick={() => handleAnswer(true)}
					>
						Верно
						<span className="icon icon--arrow-right" />
					</button>
				</div>
			</div>
		);
}
