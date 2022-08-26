import '../../../styles/pages/textbook.scss';

import { Footer } from '../../components/layouts/Footer';
import { Header } from '../../components/layouts/Header';
import { Categories } from './Categories';
import { Words } from './Words';

export function Textbook() {
	return (
		<div className="page-container page-textbook">
			<Header />
			<main className="main">
				<div className="container row">
					<Categories />
					<Words />
				</div>
			</main>
			<Footer />
		</div>
	);
}
