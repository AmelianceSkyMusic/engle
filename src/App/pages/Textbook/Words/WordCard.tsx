import { useState } from 'react';
import { IHardWord, IUserPageWord } from '../../../types/interfaces';
import { BASE_URL } from '../../../API/consts';
import { Modal } from '../../../../asmlib/asm-ui/components/Modal';
import { addWordToHard } from '../../../API/users/words/hardWords/addWordToHard';
import { useTypedDispatch } from '../../../store/hooks/useTypedDispatch';
import { getWordsAction } from '../../../store/reducers/words/actions/getWordsAction';
import { deleteWordFromHard } from '../../../API/users/words/hardWords/deleteWordFromHard';
import { getHardWordsAction } from '../../../store/reducers/hardWords/actions/getHardWordsAction';
import { addWordToLearned } from '../../../API/users/words/learningWords/addWordToLearned';
import { deleteWordFromLearned } from '../../../API/users/words/learningWords/deleteWordFromLearned';
import { Loader } from '../../../../asmlib/asm-ui/components/Loader';
import { store } from '../../../store';
import { updateStatistic } from '../../../API/users/statistic/updateStatistics';

interface IWordCardProps {
  word: IUserPageWord | IHardWord;
	isLogged: boolean;
	forHardWords?: boolean;
}
export function WordCard({ word, isLogged, forHardWords }: IWordCardProps) {
	const [modal, setModal] = useState(false);
	const imgUrl = `${BASE_URL}${word.image}`;
	const { userId } = store.getState().user;

	const links = [word.audio, word.audioMeaning, word.audioExample].map((src) => `${BASE_URL}${src}`);
	const player = new Audio();
	[player.src] = links;
	player.load();
	function startAudio() {
		player.pause();
		let currentIndex = 0;
		player.src = links[currentIndex];
		currentIndex += 1;
		player.play();
		player.addEventListener('ended', () => {
			if (currentIndex < links.length) {
				player.src = links[currentIndex];
				player.play();
				currentIndex += 1;
			}
		});
	}

	const dispatch = useTypedDispatch();
	function rerenderCards() {
		if (forHardWords) {
			dispatch(getHardWordsAction());
		} else {
			dispatch(getWordsAction(word.group, word.page));
		}
	}

	const [waiting, setWaiting] = useState(false);

	async function waitForUpdate(cb: (id: string) => Promise<void>) {
		setWaiting(true);
		await cb(word.id as string);
		setWaiting(false);
	}
	async function addToHard() {
		await waitForUpdate(addWordToHard);
		dispatch(getWordsAction(word.group, word.page));
	}
	async function removeFromHard() {
		await waitForUpdate(deleteWordFromHard);
		rerenderCards();
	}
	async function addToLearned() {
		await waitForUpdate(addWordToLearned);
		await updateStatistic(userId, 'textbook', { learnedWords: word.id });
		rerenderCards();
	}
	async function removeFromLearned() {
		await waitForUpdate(deleteWordFromLearned);
		rerenderCards();
	}

	return (
		<li className="word-card">
			<img className="word-card__img" src={imgUrl} alt={word.word} />
			<div className="word-card__panel">
				<div className="word-card__panel-row">
					<p className="word-card__word p1">{word.word}</p>
				</div>
				<div className="word-card__panel-row">
					{word.userWord?.difficulty === 'hard'
						&& <div className="word-label word-label_hard" title="Вы пометили это слово как сложное" />}
					{word.userWord?.optional.isLearned
						&& <div className="word-label word-label_learned" title="Вы пометили это слово как изученное" />}
					<button type="button" className="word-card__more icon click icon--more-horizontal" onClick={() => setModal(true)}>
						{}
					</button>
					{modal && (
						<Modal
							setOpen={setModal}
							mainButton={
								{
									callback() {
										player.pause();
									},
								}
							}
							blackout={() => player.pause()}
						>
							<div className="word-modal">
								{waiting && <Loader />}
								<div className="word-modal__column">
									<img src={imgUrl} alt={word.word} className="word-modal__image" />
									{ isLogged
									&& (
										<>
											{word.userWord?.difficulty === 'hard'
												&& <div className="word-label word-label_hard" title="Вы пометили это слово как сложное" />}
											{word.userWord?.optional.isLearned
												&& <div className="word-label word-label_learned" title="Вы пометили это слово как изученное" />}
											<div className="word-modal__statistic">
												<h4 className="h4">Статистика</h4>
												<p className="word-modal__audiocall-statistic p1">
													Аудиовызов:
													<span className="word-modal__right-answer" title="Правильные ответы"> 0 </span>
													/
													<span className="word-modal__wrong-answer" title="Неправильные ответы"> 0</span>
												</p>
												<p className="word-modal__sprint-statistic p1">
													Спринт:
													<span className="word-modal__right-answer" title="Правильные ответы"> 0 </span>
													/
													<span className="word-modal__wrong-answer" title="Неправильные ответы"> 0</span>
												</p>
											</div>
											<div className="word-modal__controls">
												{word.userWord?.difficulty === 'hard'
													? (
														<button
															type="button"
															className="word-modal__add-to-hard button-sm secondary"
															onClick={() => removeFromHard()}
														>
															Убрать из сложных
														</button>
													)
													: (
														<button
															type="button"
															className="word-modal__add-to-hard button-sm secondary"
															onClick={() => addToHard()}
														>
															Добавить в сложные
														</button>
													)}
												{word.userWord?.optional.isLearned
													? (
														<button
															type="button"
															className="word-modal__add-to-learned button-sm secondary"
															onClick={() => removeFromLearned()}
														>
															Убрать из изученных
														</button>
													)
													: (
														<button
															type="button"
															className="word-modal__add-to-learned button-sm secondary"
															onClick={() => addToLearned()}
														>
															Добавить в изученные
														</button>
													)}

											</div>
										</>
									)}
								</div>
								<div className="word-modal__column">
									<div className="word-modal__main-info">
										<h3 className="word-modal__word h3">{word.word}</h3>
										<p className="word-modal__translation p1">{word.wordTranslate}</p>
										<div className="word-modal__pronounce">
											<p className="word-modal__transcription p1">{word.transcription}</p>
											<button type="button" className="word-modal__sound icon click icon--sound" onClick={() => startAudio()}>{}</button>
										</div>
									</div>
									<div className="word-modal__explanations">
										<h4 className="h4">Значение</h4>
										<p
											className="word-modal__meaning p1"
											dangerouslySetInnerHTML={{ __html: word.textMeaning }}
										/>
										<p className="word-modal__meaning-translation p2">{word.textMeaningTranslate}</p>
									</div>
									<div className="word-modal__examples">
										<h4 className="h4">Пример</h4>
										<p
											className="word-modal__example p1"
											dangerouslySetInnerHTML={{ __html: word.textExample }}
										/>
										<p className="word-modal__example-translation p2">{word.textExampleTranslate}</p>
									</div>
								</div>
							</div>
						</Modal>
					)}
				</div>
			</div>
		</li>
	);
}
