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

const DEFAULT_POINTS_AWARD = 10;
const ANSWERS_TO_PROGRESS = 3;
const GAME_DURATION = 60;

export function Game() {

	const dispatch = useTypedDispatch();
	const { userPageWords, isLoading } = useTypedSelector((state) => state.words);
	const shuffledWords = useMemo(() => shuffleArray(userPageWords), [userPageWords]);
	const [word, setWord] = useState<IUserPageWord>(shuffledWords[0]);
	const [translation, setTranslation] = useState('');

	const [points, setPoints] = useState(0);
	const [pointsCoff, setPointsCoff] = useState(1);
	const [streak, setStreak] = useState(0);
	const [result, setResult] = useState<
	{ right: IUserPageWord[]; wrong: IUserPageWord[]; topRight: number }
	>({ right: [], wrong: [], topRight: 0 });

	const [gameEnded, setGameEnded] = useState(false);
	const endGame = useCallback(() => {
		setGameEnded(true);
	}, []);

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

	const handleAnswer = useCallback((answer: boolean) => {
		const correctAnswerAudio = new Audio(correctAnswerSound);
		const wrongAnswerAudio = new Audio(wrongAnswerSound);
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

		function checkForTopRight() {
			if (streak > result.topRight) return streak;
			return result.topRight;
		}

		if (answer === (word.wordTranslate === translation)) {
			blink('green');
			correctAnswerAudio.play();
			setStreak(streak + 1);
			setResult({
				...result,
				right: [...result.right, word],
				topRight: checkForTopRight(),
			});
			setPoints(points + DEFAULT_POINTS_AWARD * pointsCoff);
			if ((streak + 1) % ANSWERS_TO_PROGRESS === 0 && streak !== 0) setPointsCoff(pointsCoff + 1);
			changeUserWord(word.id, 'sprint', 'right');
		} else {
			blink('red');
			wrongAnswerAudio.play();
			setStreak(0);
			setPointsCoff(1);
			setResult({
				...result,
				wrong: [...result.wrong, word],
			});
			changeUserWord(word.id, 'sprint', 'wrong');
		}
		checkForNewWords();
	}, [word, translation, shuffledWords, dispatch, endGame, streak, result, points, pointsCoff]);

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

	function createCheckMarks() {
		return Array(ANSWERS_TO_PROGRESS).fill(1).map((el, idx) => (
			<div
				// eslint-disable-next-line react/no-array-index-key
				key={idx}
				className={`sprint-game__checkmark icon icon--checkmark 
					${streak % ANSWERS_TO_PROGRESS >= idx + 1 ? 'sprint-game__checkmark_active' : ''}`}
			/>
		));
	}

	return gameEnded
		? <ModalResult result={result} game="sprint" />
		: (
			<>
				<div ref={blinkerEl} className="blinker" />
				<div className="sprint-game">
					<div className="score sprint-game__score sprint-game__row">
						<div className="sprint-game__streak">
							{createCheckMarks()}
						</div>
						<div className="sprint-game__points sprint-game__row">
							<div className="sprint-game__col sprint-game__col_left">
								<p className="sprint-game__award p1">
									{`${DEFAULT_POINTS_AWARD * pointsCoff} очков`}
								</p>
							</div>
							<div className="sprint-game__col sprint-game__col_center">
								<p className="sprint-game__coff p1">
									{`x${pointsCoff}`}
								</p>
							</div>
							<div className="sprint-game__col sprint-game__col_right">
								<p className="sprint-game__total p1">
									Всего очков:
									{` ${points}`}
								</p>
							</div>
						</div>
					</div>
					<div className="sprint-game__words sprint-game__row">
						<div className="sprint-game__col sprint-game__col_left">
							<h3 className="sprint-game__eng-word h3">
								{isLoading
									? (
										<div className="">
											...
											<Loader />
										</div>
									)
									: word?.word}
							</h3>
						</div>
						<h3 className="sprint-game__question-mark sprint-game__col sprint-game__col_center h3">?</h3>
						<div className="sprint-game__col sprint-game__col_right">
							<h3 className="sprint-game__ru-word h3">
								{isLoading
									? '...'
									: translation}
							</h3>
						</div>
					</div>
					<div className="sprint-game__controls sprint-game__row">
						<div className="sprint-game__col sprint-game__col_left">
							<button
								type="button"
								className="sprint-game__wrong-btn button"
								onClick={() => handleAnswer(false)}
							>
								<span className="icon icon--arrow-left" />
								Неверно
							</button>
						</div>
						<div className="sprint-game__col sprint-game__col_center">
							<Timer onEndCallback={endGame} duration={GAME_DURATION} />
						</div>
						<div className="sprint-game__col sprint-game__col_right">
							<button
								type="button"
								className="sprint-game__correct-btn button"
								onClick={() => handleAnswer(true)}
							>
								Верно
								<span className="icon icon--arrow-right" />
							</button>
						</div>
					</div>
				</div>
			</>
		);
}
