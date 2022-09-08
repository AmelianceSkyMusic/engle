import {
	useCallback, useEffect, useLayoutEffect, useMemo, useState,
} from 'react';
import { getRandomNumber } from '../../../../asmlib/asm-scripts';
import { shuffleArray } from '../../../../asmlib/asm-scripts/shuffleArray';
import { Button } from '../../../../asmlib/asm-ui/components/Button';
import { IUserPageWord } from '../../../types/interfaces';
import { ModalResult } from '../ModalResult';
import { playAudio } from './playAudio';

interface IGameProps {
	words: IUserPageWord[];
}

export function Game({ words }: IGameProps) {

	const [topRight, setTopRight] = useState(0);
	const [currentRightCount, setCurrentRightCount] = useState(0);
	const [result, setResult] = useState<
	{ right: IUserPageWord[]; wrong: IUserPageWord[]; topRight: number }
	>({ right: [], wrong: [], topRight: 0 });

	const shuffledWords = useMemo(() => shuffleArray(words), [words]);
	const wordsForGame = useMemo(() => structuredClone(shuffledWords), [shuffledWords]);

	const [correctWordCount, setCurrentWordCount] = useState(0);
	const [correctWord, setCurrentWord] = useState<IUserPageWord>(wordsForGame[correctWordCount]);
	const [wordVariants, setWordVariants] = useState<IUserPageWord[]>([]);
	const [isShowAnswerWord, setIsShowAnswerWord] = useState(false);

	useLayoutEffect(() => {
		setCurrentWord(wordsForGame[correctWordCount]);
		if (correctWordCount >= 0 && correctWordCount <= 19) {
			const wordVariantsTemp: IUserPageWord[] = [wordsForGame[correctWordCount]];

			while (wordVariantsTemp.length < 5) {
				const randomPageNumber = getRandomNumber(0, 19);
				const word = shuffledWords[randomPageNumber];

				if (!(wordVariantsTemp.find((w) => w.id === word.id))) {
					wordVariantsTemp.push(word);
				}
			}
			setWordVariants([...shuffleArray(wordVariantsTemp) as IUserPageWord[]]);
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [correctWordCount]);

	function handleIDontKnowButton() {
		setIsShowAnswerWord(true);
		playAudio();
		const word$ = document.querySelector(`[data-id="${correctWord.id}"]`) as HTMLButtonElement;
		word$.classList.add('right');
		if (result.wrong) {
			setResult({
				...result,
				wrong: [...result.wrong, correctWord],
			});
		}
		word$.disabled = true;
		const words$ = document.querySelectorAll('.game__button') as NodeListOf<HTMLButtonElement>;
		words$.forEach((w$) => {
			const wordButtonElem$ = w$;
			wordButtonElem$.disabled = true;
		});
	}

	function handleNextButton() {
		setIsShowAnswerWord(false);
		const word$ = document.querySelector(`[data-id="${correctWord.id}"]`) as HTMLButtonElement;
		word$.classList.remove('right');
		word$.classList.remove('wrong');
		word$.disabled = false;
		const words$ = document.querySelectorAll('.game__button') as NodeListOf<HTMLButtonElement>;
		words$.forEach((w$) => {
			const wordButtonElem$ = w$;
			wordButtonElem$.classList.remove('right');
			wordButtonElem$.classList.remove('wrong');
			wordButtonElem$.disabled = false;
		});
		setCurrentWordCount((prev) => prev + 1);
		playAudio();
	}

	function checkAnswer(event: React.MouseEvent<HTMLElement>) {
		setIsShowAnswerWord(true);
		const elem = event.currentTarget as HTMLButtonElement;
		const word$ = document.querySelector(`[data-id="${correctWord.id}"]`) as HTMLButtonElement;
		word$.disabled = true;
		const words$ = document.querySelectorAll('.game__button') as NodeListOf<HTMLButtonElement>;
		words$.forEach((w$) => {
			const wordButtonElem$ = w$;
			wordButtonElem$.disabled = true;
		});
		playAudio();
		if (correctWord.id === elem.dataset.id) {
			elem.classList.add('right');
			setCurrentRightCount((prev) => prev + 1);
			if ((currentRightCount + 1) > topRight) setTopRight(currentRightCount + 1);

			if (result.right) {
				setResult({
					...result,
					right: [...result.right, correctWord],
					topRight: topRight + 1,
				});
			}
		} else {
			word$.classList.add('right');
			elem.classList.add('wrong');
			setCurrentRightCount(0);
			if (result.wrong) {
				setResult({ ...result, wrong: [...result.wrong, correctWord] });
			}
		}

	}

	const keysHandler = useCallback((event: KeyboardEvent) => {
		function checkKeysAnswer(keyNumber: number) {
			const wordId = keyNumber - 1;
			setIsShowAnswerWord(true);

			const correctWordElem$ = document.querySelector(`[data-id="${correctWord.id}"]`) as HTMLButtonElement;
			const chosenWordElem$ = document.querySelector(`[data-id="${wordVariants[wordId].id}"]`) as HTMLButtonElement;
			correctWordElem$.disabled = true;
			const words$ = document.querySelectorAll('.game__button') as NodeListOf<HTMLButtonElement>;
			words$.forEach((w$) => {
				const wordButtonElem$ = w$;
				wordButtonElem$.disabled = true;
			});
			playAudio();
			if (correctWord.id === wordVariants[wordId].id) {

				chosenWordElem$.classList.add('right');
			} else {
				correctWordElem$.classList.add('right');
				chosenWordElem$.classList.add('wrong');
			}
		}
		const game$ = document.querySelector('.game') as HTMLButtonElement;
		const button$ = game$.querySelector('.button') as HTMLButtonElement;
		if (!isShowAnswerWord) {
			switch (event.key) {
			case '1': checkKeysAnswer(1); break;
			case '2': checkKeysAnswer(2); break;
			case '3': checkKeysAnswer(3); break;
			case '4': checkKeysAnswer(4); break;
			case '5': checkKeysAnswer(5); break;
			default: break;
			}
		}
		if (event.key === ' ' || event.key === 'Enter') {
			if (isShowAnswerWord) {
				handleNextButton();
			} else {
				handleIDontKnowButton();
			}
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [correctWord, isShowAnswerWord, wordVariants]);

	useEffect(() => {
		document.addEventListener('keydown', keysHandler);
		return () => {
			document.removeEventListener('keydown', keysHandler);
		};
	}, [keysHandler]);

	return (
		<div>
			{ correctWordCount < 20
				? (
					<div className="game">
						<audio id="audio" autoPlay>
							<track kind="captions" />
							<source src={`https://app-learnwords.herokuapp.com/${correctWord.audio}`} type="audio/mpeg" />
						</audio>
						<div className="game__play-sound-button-container">
							<button type="button" onClick={playAudio} className="game__play-sound-button button--sound">{}</button>
							<span className="game__play-sound-button_hover">{}</span>
							<span className="game__play-sound-button_playing">{}</span>
							{isShowAnswerWord && <img src={`https://app-learnwords.herokuapp.com/${correctWord.image}`} alt={correctWord.image} className="game__image" />}
						</div>
						{isShowAnswerWord && <h3 className="h3">{correctWord.word}</h3>}
						{wordVariants.length > 0

					&& (
						<div className="game__buttons">

							<button type="button" data-id={wordVariants[0].id} onClick={checkAnswer} className="game__button">
								<div className="button-icon">1</div>
								<h4 className="h4">{wordVariants[0].wordTranslate}</h4>
							</button>
							<button type="button" data-id={wordVariants[1].id} onClick={checkAnswer} className="game__button">
								<div className="button-icon">2</div>
								<h4 className="h4">{wordVariants[1].wordTranslate}</h4>
							</button>
							<button type="button" data-id={wordVariants[2].id} onClick={checkAnswer} className="game__button">
								<div className="button-icon">3</div>
								<h4 className="h4">{wordVariants[2].wordTranslate}</h4>
							</button>
							<button type="button" data-id={wordVariants[3].id} onClick={checkAnswer} className="game__button">
								<div className="button-icon">4</div>
								<h4 className="h4">{wordVariants[3].wordTranslate}</h4>
							</button>
							<button type="button" data-id={wordVariants[4].id} onClick={checkAnswer} className="game__button">
								<div className="button-icon">5</div>
								<h4 className="h4">{wordVariants[4].wordTranslate}</h4>
							</button>

						</div>
					)}
						{isShowAnswerWord
							? <Button type="secondary" buttonClass="button" callback={() => handleNextButton()}>Далее</Button>
							: <Button type="secondary" buttonClass="button" callback={() => handleIDontKnowButton()}>Без понятия</Button>}
					</div>
				)
				: (
					<ModalResult result={result} />
				)}
		</div>
	);
}
