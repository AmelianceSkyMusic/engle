import '../../styles/pages/sprint.scss';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';

export function Sprint() {
	return (
		<div className="page__container page__sprint">
			<Header />
			<main className="main">
				<div className="container row">
					<h1 className="h1">
						Sprint
					</h1>
				</div>
			</main>
			<Footer />
		</div>
	);
}
