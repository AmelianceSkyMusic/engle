import '../../styles/pages/statistics.scss';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
// import { getUserStatistics } from '../API/users/statistic/axios/getUserStatistic';
// import { updateUserStatistics } from '../API/users/statistic/axios/updateUserStatistic';
import { updateStatistic } from '../API/users/statistic/updateStatistics';

const { userId } = JSON.parse(localStorage.getItem('user') as string);
console.log(localStorage.getItem('user'));
// updateStatistic(userId, 'textbook', 'countNewWords', [15]);
// updateStatistic(userId, 'textbook', 'learnedWords', ['5e9f5ee35eb9e72bc21af4f3']);
// updateStatistic(userId, 'textbook', 'newWords', ['5e9f5ee35eb9e72bc21af4f3']);
updateStatistic(userId, 'sprint', 'countNewWords', [11]);

export function Statistics() {
	return (
		<div className="page-container page-statistics">
			<Header />
			<main className="main">
				<div className="container row">
					<h1 className="h1">
						Statistics
					</h1>
				</div>
			</main>
			<Footer />
		</div>
	);
}
