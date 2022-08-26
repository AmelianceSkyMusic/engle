import { IWord } from '../../../interfaces/interfaces';
import { BASE_URL } from '../../../API/consts';

interface WordCardProps {
  word: IWord;
}

export function WordCard({ word }: WordCardProps) {
	const imgUrl = `${BASE_URL}${word.image}`;
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
					<button type="button" className="word-card__popup-btn">more</button>
				</div>
			</div>
		</li>
	);
}
