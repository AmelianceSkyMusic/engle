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

	const [stateShort, setStateShort] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await API.getUserStatistics(userId);
				setStateShort(response);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();

	}, [userId]);\

	return (
		<div className="page-container page-statistics">
			<Header />
			<main className="main">
				<div className="container row">
					{isLogged
						? (
							<div className="page-statistics__header-block">
								<h2 className="page-statistics__heading h2">
									Cтатистика
								</h2>
								<h3 className="page-statistics__heading h3">
									{userName}
								</h3>
							</div>
						)
						: 	(
							<div className="page-statistics__header-block">
								<h2 className="page-statistics__heading h2">
									Cтатистика
								</h2>
								<h3 className="page-statistics__heading h3">Войдите чтоб увидеть статистику</h3>
							</div>
						)}
					{ stateShort && isLogged && (
						userCreateStatMarkup(stateShort as IStatistic)
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
}
