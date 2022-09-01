/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { IWord } from '../../../types/interfaces';
import { BASE_URL } from '../../../API/consts';
import { Modal } from '../../../../asmlib/asm-ui/components/Modal';

interface WordCardProps {
  word: IWord;
	isLogged: boolean;
}
export function WordCard({ word, isLogged }: WordCardProps) {
	const [modal, setModal] = useState(false);
	const imgUrl = `${BASE_URL}${word.image}`;

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

	return (
		<li className="word-card">
			<img className="word-card__img" src={imgUrl} alt={word.word} />
			<div className="word-card__panel">
				<div className="word-card__panel-row">
					<p className="word-card__word p1">{word.word}</p>
					<p className="statistic word-card__statistic p2">
						<span className="statistic__correct">8</span>
						/
						<span className="statistic__wrong">10</span>
					</p>
				</div>
				<div className="word-card__panel-row">
					<div className="word-card__label" />
					<button type="button" className="icon click icon--corner-down-right" onClick={() => setModal(true)}>
						{}
					</button>
					{modal && (
						<Modal setOpen={setModal}>
							<div className="word-modal">
								<div className="word-modal__column col-7 col-md-12">
									<img src={imgUrl} alt={word.word} className="word-modal__image" />
									{ isLogged
									&& (
										<>
											<div className="word-modal__statistic">
												<h4 className="h4">Статистика</h4>
												<p className="word-modal__correct-answers p1">
													Угадано: 8
												</p>
												<p className="word-modal__incorrect-answers p1">
													Не угадано: 10
												</p>
											</div>
											<div className="word-modal__controls">
												<button type="button" className="word-modal__add-to-hard button-sm secondary">
													Добавить в сложные
												</button>
												<button type="button" className="word-modal__add-to-learned button-sm secondary">
													Добавить в изученные
												</button>
											</div>
										</>
									)}
								</div>
								<div className="word-modal__column col-5 col-md-12">
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
