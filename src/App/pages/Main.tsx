import '../../styles/pages/main.scss';
import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';

export function Main() {
	return (
		<div className="page__container page__main">
			<Header />
			<main className="main">
				<div className="container row">
					<div className="description col-6 col-lg-12">
						<h1 className="h1">
							Изучай инглиш легко и сложно
						</h1>
						<p className="p1">
							Здесь могло бы быть очень много умного текста,
							<br />
							но мы подумали, что на практике вы поймете намного больше.
						</p>
					</div>
					<div className="col-6 col-lg-12 illustration-container">
						<div className="illustration" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
