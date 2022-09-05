import '../../styles/pages/statistics.scss';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';
import API from '../API';
import { store } from '../store';

export function Statistics() {
	const { isLogged } = store.getState().user;
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
