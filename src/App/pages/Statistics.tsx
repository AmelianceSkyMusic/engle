import { useState, useEffect } from 'react';
import {	Outlet, Link, useLocation } from 'react-router-dom';

import API from '../API';
import { store } from '../store';
import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import { Loader } from '../../asmlib/asm-ui/components/Loader';
import { IStatistic } from '../types/interfaces';
import '../../styles/pages/statistics.scss';

export function Statistics() {
	const location = useLocation();
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

	function isActive(pathStat: string) {
		if (location.pathname.includes(pathStat)) return 'page-statistics__links-item-link_active';
		return 'page-statistics__links-item-link';
	}

	return (
		<div className="page-container page-statistics">
			<Header />
			<main className="main">
				<div className="container row">
					{loading ? (
						<Loader />
					) : (
						<>
							{isLogged ? (
								<div className="page-statistics__header-block">
									<h2 className="page-statistics__heading h2">
										Статистика
									</h2>
									<h3 className="page-statistics__heading h3">
										{userName}
									</h3>
								</div>
							) : (
								<div className="page-statistics__header-block">
									<h2 className="page-statistics__heading h2">
										Статистика
									</h2>
									<h3 className="page-statistics__heading h3">
										Войдите чтоб увидеть статистику
									</h3>
								</div>
							)}
							{stateShort
								&& isLogged
								&& !loading
									&& (
										<>
											<h4 className="h4">Ми собрали немного твоей статистики, выбирай какую увидеть:</h4>
											<ul className="page-statistics__links-list">
												<li className="page-statistics__links-item h4">
													<Link to="long" className={isActive('long')}>Долгосрочная статистика</Link>
												</li>
												<li className="page-statistics__links-item h4">
													<Link to="simple" className={isActive('simple')}>Простая статистика</Link>
												</li>
											</ul>
										</>
									)}
							{stateShort
								&& isLogged
								&& !loading
									&& <Outlet context={stateShort} />}
							{!stateShort && isLogged && (
								<h4 className="page-statistics__heading h4">
									Вы пока не проводили действий, отслеживаемых
									статистикой
								</h4>
							)}
						</>
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
}
