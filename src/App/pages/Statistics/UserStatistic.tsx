import { useOutletContext } from 'react-router-dom';
import { IStatistic } from '../../types/interfaces';

export function UserCreateStatMarkup() {
	const data: IStatistic = useOutletContext();
	const curDate = new Date().toLocaleDateString();
	const countWordForDay = data.optional.textBook.learnedWords[curDate]
		? data.optional.textBook.learnedWords[curDate].length
		: 0;

	return (
		<div className="page-statistics__container">
			<section className="page-statistics__section">
				<h4 className="h4">По словам: </h4>
				<div className="page-statistics__section-description">
					<p className="p1">
						Выучено слов всего:
						{' '}
						{data.learnedWords}
					</p>
					<p className="p1">
						Выучено слов за день:
						{' '}
						{countWordForDay}
					</p>
				</div>
			</section>
			<section className="page-statistics__section">
				<h4 className="h4">Игра «Аудиовызов»: </h4>
				<div className="page-statistics__section-description">
					<p className="p1">
						Показано слов:
						{' '}
						{data.optional.audioCall.countShowedWords}
					</p>
					<p className="p1">
						Процент правильных ответов:
						{' '}
						{Math.round((data.optional.audioCall.countRight
							/ (data.optional.audioCall.countRight + data.optional.audioCall.countWrong))
							* 100 || 0)}
						%
					</p>
					<p className="p1">
						Самая длинная серия правильных ответов:
						{' '}
						{data.optional.audioCall.topRight}
					</p>
				</div>
			</section>
			<section className="page-statistics__section">
				<h4 className="h4">Игра «Спринт»:</h4>
				<div className="page-statistics__section-description">
					<p className="p1">
						Показано слов:
						{' '}
						{data.optional.sprint.countShowedWords}
					</p>
					<p className="p1">
						Процент правильных ответов:
						{' '}
						{Math.round((data.optional.sprint.countRight
							/ (data.optional.sprint.countRight + data.optional.sprint.countWrong))
							* 100 || 0) }
						%
					</p>
					<p className="p1">
						Самая длинная серия правильных ответов:
						{' '}
						{data.optional.sprint.topRight}
					</p>
				</div>

			</section>
		</div>
	);
}
