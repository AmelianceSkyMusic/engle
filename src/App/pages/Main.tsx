import '../../styles/pages/main.scss';
import '../../styles/entities/decoration.scss';
import '../../styles/entities/mascots.scss';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';

export function Main() {
	return (
		<div className="page-container page-main">
			<div className="decoration decoration_type1" />
			<Header />
			<main className="main">
				<section className="hero container row">
					<div className="hero__description col-6 col-lg-12">
						<h1 className="h1">
							Изучай инглиш легко и сложно
						</h1>
						<p className="p1">
							Здесь могло бы быть очень много умного текста,
							<br />
							но мы подумали, что на практике вы поймете намного больше.
						</p>
					</div>
					<div className="mascot page-main__mascot col-6 col-lg-12">
						<div className="mascot__img mascot__img_thinker" />
					</div>
					<div className="hero__scroll-down col-12">
						<a href="#next-block" className="hero__scroll-down-button">
							<div className="hero__scroll-down-img" />
						</a>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
