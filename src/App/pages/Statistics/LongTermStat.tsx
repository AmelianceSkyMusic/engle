/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import {
	LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { useOutletContext } from 'react-router-dom';
import { IStatistic } from '../../types/interfaces';

type TChart = {
	name: string;
	count: string;
}

export function LongTermStat() {
	const context: IStatistic = useOutletContext();
	const learnedWords: TChart[] = [];
	const growCountWords: TChart[] = [];

	function concatArrayOfDates(obj: { [date: string]: string[] }) {
		Object.entries(obj).forEach((el) => {
			const res = {
				name: '',
				count: '',
			};
			if (Array.isArray(el[1])) {
				res.name = el[0];
				res.count = (el[1].length).toString();
			}
			(learnedWords).push(res);
		});
	}
	concatArrayOfDates(context.optional.textBook.learnedWords);

	function growingNumbersOfWords(obj: { [date: string]: string[] }) {
		Object.entries(obj).forEach((el, index) => {
			const curEl = {
				name: '',
				count: '',
			};
			if (growCountWords.length === 0) {
				curEl.name = el[0];
				curEl.count = (el[1].length).toString();
				growCountWords.push(curEl);
			} else if (growCountWords.length > 0) {
				curEl.name = el[0];
				curEl.count = ((el[1].length) + Number(growCountWords[index - 1].count)).toString();
				growCountWords.push(curEl);
			}
		});
	}
	growingNumbersOfWords(context.optional.textBook.learnedWords);

	return (
		<>
			{ learnedWords.length > 0
				&& (
					<>
						<h3 className="page-statistics__heading h4">
							Количество слов за день:
						</h3>
						<ResponsiveContainer width="100%" aspect={2}>
							<LineChart
								width={700}
								height={300}
								data={learnedWords}
								margin={{
									top: 5, right: 20, bottom: 5, left: 0,
								}}
							>
								<Line type="monotone" dataKey="count" stroke="var(--color--a2-1)" />
								<CartesianGrid stroke="var(--color--f1-1)" strokeDasharray="5 5" />
								<XAxis
									dataKey="name"
									tick={false}
									stroke="var(--color--f1-1)"
								/>
								<YAxis
									tick={{
										fill: 'var(--color--f1-1)', fontFamily: 'Lato', fontSize: '12px', fontWeight: '600',
									}}
									stroke="var(--color--f1-1)"
								/>
								<Tooltip />
							</LineChart>
						</ResponsiveContainer>
					</>
				)}
			{ growCountWords.length > 0
		&& (
			<>
				<h3 className="page-statistics__heading h4">
					Всего выучено слов :
				</h3>
				<ResponsiveContainer width="100%" aspect={2}>
					<LineChart
						width={700}
						height={300}
						data={growCountWords}
						margin={{
							top: 5, right: 20, bottom: 5, left: 0,
						}}
					>
						<Line type="monotone" dataKey="count" stroke="var(--color--a2-1)" />
						<XAxis
							dataKey="name"
							tick={false}
							stroke="var(--color--f1-1)"
						/>
						<CartesianGrid stroke="var(--color--f1-1)" strokeDasharray="5 5" />
						<YAxis
							tick={{
								fill: 'var(--color--f1-1)', fontFamily: 'Lato', fontSize: '12px', fontWeight: '600',
							}}
							stroke="var(--color--f1-1)"
						/>
						<Tooltip />
					</LineChart>
				</ResponsiveContainer>
			</>
		)}
		</>
	);
}
