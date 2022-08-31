import '../../../styles/pages/textbook.scss';

import { Footer } from '../../components/layouts/Footer';
import { Header } from '../../components/layouts/Header';
import { Categories } from './Categories';
import { Words } from './Words';
import { Games } from './Games';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';

export function Textbook() {
	const { groupNumber } = useTypedSelector((state) => state.words);
	const decorationClasses = `decoration decoration_type3 decoration_group${groupNumber}`;
	return (
		<div className="page-container page-textbook">
			<div className={decorationClasses} />
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
