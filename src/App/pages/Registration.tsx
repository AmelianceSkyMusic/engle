import '../../styles/pages/registration.scss';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';

export function Registration() {
	return (
		<div className="page__container page__registration">
			<Header />
			<main className="main">
				<div className="container row">
					<h1 className="h1">
						Registration
					</h1>
				</div>
			</main>
			<Footer />
		</div>
	);
}
