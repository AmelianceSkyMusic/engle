import '../../styles/pages/statistics.scss';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';

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
