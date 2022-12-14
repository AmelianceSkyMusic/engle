import { useState, useEffect } from 'react';

import '../../styles/pages/statistics.scss';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import API from '../API';
import { store } from '../store';
import { IStatistic } from '../types/interfaces';
import { userCreateStatMarkup } from './Statistics/UserStatistic';

export function Statistics() {
	const { isLogged, userId, userName } = store.getState().user;

	const [stateShort, setStateShort] = useState<IStatistic>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await API.getUserStatistics(userId);
				setStateShort(response);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();

	}, [userId]);

	return (
		<div className="page-container page-statistics">
			<Header />
			<main className="main">
				<div className="container row">
					{isLogged
						? (
							<div className="page-statistics__header-block">
								<h2 className="page-statistics__heading h2">
									Статистика
								</h2>
								<h3 className="page-statistics__heading h3">
									{userName}
								</h3>
							</div>
						)
						: 	(
							<div className="page-statistics__header-block">
								<h2 className="page-statistics__heading h2">
									Статистика
								</h2>
								<h3 className="page-statistics__heading h3">Войдите чтоб увидеть статистику</h3>
							</div>
						)}
					{ stateShort && isLogged && !loading && (
						userCreateStatMarkup(stateShort)
					)}
					{ !stateShort && isLogged && (
						<h4 className="page-statistics__heading h4">Вы пока не проводили действий, отслеживаемых статистикой</h4>
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
}
