import '../../styles/pages/textbook.scss';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';

export function Textbook() {
	return (
		<div className="page-container page-textbook">
			<Header />
			<main className="main">
				<div className="container row">
					<h1 className="h1">
						Textbook
					</h1>
				</div>
			</main>
			<Footer />
		</div>
	);
}
