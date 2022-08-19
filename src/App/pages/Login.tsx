import '../../styles/pages/login.scss';

import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';

export function Login() {
	return (
		<div className="page__container page__login">
			<Header />
			<main className="main">
				<div className="container row">
					<h1 className="h1">
						Login
					</h1>
				</div>
			</main>
			<Footer />
		</div>
	);
}
