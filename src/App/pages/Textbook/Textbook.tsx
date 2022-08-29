import '../../../styles/pages/textbook.scss';

import { Footer } from '../../components/layouts/Footer';
import { Header } from '../../components/layouts/Header';
import { Categories } from './Categories';
import { Words } from './Words';
import { Games } from './Games';

export function Textbook() {
	return (
		<div className="page-container page-textbook">
			<div className="decoration decoration_type3" />
			<div className="decoration decoration_type4" />
			<Header logoOnly />
			<main className="main">
				<div className="container row">
					<Categories />
					<Words />
					<Games />
				</div>
			</main>
			<Footer />
		</div>
	);
}
