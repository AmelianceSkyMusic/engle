import { IStatistic } from '../../types/interfaces';

export function userCreateStatMarkup(data: IStatistic) {
	const curDate = new Date().toLocaleDateString();
	let countWordForDay = 0;
	if (curDate in data.optional.textBook.learnedWords) {
		countWordForDay = data.optional.textBook.learnedWords[curDate].length;
	}
	return (
		<div className="page-statistics__container">
			<section className="page-statistics__section">
				<h4 className="h4">По словам: </h4>
				<div className="page-statistics__section-description">
					<p className="p1">
						Виучено слов всего:
						{' '}
						{data.learnedWords}
					</p>
					<p className="p1">
						Виучено слов за день:
						{' '}
						{countWordForDay}
					</p>
				</div>
			</section>
			<section className="page-statistics__section">
				<h4 className="h4">AudioCall: </h4>
				<div className="page-statistics__section-description">
					<p className="p1">
						Показано слов:
						{' '}
						{data.optional.audioCall.countRight + data.optional.audioCall.countWrong}
					</p>
					<p className="p1">
						Процент правильных ответов:
						{' '}
						{(data.optional.audioCall.countRight
						/ (data.optional.audioCall.countRight + data.optional.audioCall.countWrong))
						* 100 }
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
				<h4 className="h4">Sprint:</h4>
				<div className="page-statistics__section-description">
					<p className="p1">
						Показано слов:
						{' '}
						{data.optional.sprint.countRight + data.optional.sprint.countWrong}
					</p>
					<p className="p1">
						Процент правильных ответов:
						{' '}
						{(data.optional.sprint.countRight
						/ (data.optional.sprint.countRight + data.optional.sprint.countWrong))
						* 100 }
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
