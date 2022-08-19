import '../../styles/pages/audiocall.scss';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';

export function Audiocall() {
	return (
		<div className="page__container page__audiocall">
			<Header />
			<main className="main">
				<div className="container row">
					<h1 className="h1">
						Audiocall
					</h1>
				</div>
			</main>
			<Footer />
		</div>
	);
}
