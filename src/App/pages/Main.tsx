import maxImg from '../../asmlib/asm-ui/assets/img/img--max.png';
import dimaImg from '../../asmlib/asm-ui/assets/img/img--dima.jpg';
import radzhabImg from '../../asmlib/asm-ui/assets/img/img--radzhab.jpg';

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
				<div className="container">

					<section className="hero row">
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
							<a href="#about" className="hero__scroll-down-button">
								<div className="hero__scroll-down-img" />
							</a>
						</div>
					</section>

					<section id="about" className="about-us row">
						<div className="col-12">
							<h2 className="h2">Создатели:</h2>
						</div>
						<div className="about-us__max about-us__creator a col-4 col-md-12">
							<img src={maxImg} alt={maxImg} className="about-us__img" />
							<div className="about-us__description">
								<div className="about-us__name">
									<h3 className="h3">Max</h3>
									<p className="p2">Kantor17</p>
								</div>
								<div className="about-us__items">
									<p className="p1">✓ Верстка: учебник, логин, регистрация, главный экран, игра «Спринт»</p>
									<p className="p1">✓ Учебник</p>
									<p className="p1">✓ Игра «Спринт»</p>
								</div>
							</div>
						</div>
						<div className="about-us__dima about-us__creator a col-4 col-md-12">
							<img src={dimaImg} alt={dimaImg} className="about-us__img" />
							<div className="about-us__description">
								<div className="about-us__name">
									<h3 className="h3">Dima</h3>
									<p className="p2">DStukalo</p>
								</div>
								<div className="about-us__items">
									<p className="p1">✓ Деплой и настройка бека</p>
									<p className="p1">✓ API</p>
									<p className="p1">✓ Регистрация</p>
									<p className="p1">✓ Авторизация</p>
									<p className="p1">✓ Кастомная валидация формы</p>
									<p className="p1">✓ Статистика</p>
								</div>
							</div>
						</div>
						<div className="about-us__radzhab about-us__creator a col-4 col-md-12">
							<img src={radzhabImg} alt={radzhabImg} className="about-us__img" />
							<div className="about-us__description">
								<div className="about-us__name">
									<h3 className="h3">Radzhab</h3>
									<p className="p2">AmelianceSkyMusic</p>
								</div>
								<div className="about-us__items">
									<p className="p1">✓ Дизайн</p>
									<p className="p1">✓ Redux. Store</p>
									<p className="p1">✓ Верстка: хедер, футер, игра «Аудиовызов», главный экран</p>
									<p className="p1">✓ Игра «Аудиовызов»</p>
								</div>
							</div>
						</div>
					</section>

					<section className="about-app row">
						<div className="about-app__container col-12">
							<h2 className="h2">Про приложение:</h2>
							<p className="p1">
								Engle позволяет выучить английский язык без скучной рутины.
							</p>
							<p className="p1">Пользователям приложения доступен учебник, состоящий из 3600 наиболее часто употребляемых английских слов, мини-игры «Спринт» и «Аудиовызов», а так же удобные инструменты для отслеживания своего прогресса изучения.</p>
						</div>
					</section>
				</div>

			</main>
			<Footer />
		</div>
	);
}
