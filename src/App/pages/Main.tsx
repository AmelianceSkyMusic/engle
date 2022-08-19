import '../../styles/pages/main.scss';
import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';

export function Main() {
	return (
		<div className="page__container page__main">
			<Header />
			<main className="main">
				<div className="container row">
					<h1 className="h1">
						Main H1 Heading
					</h1>
					<h3 className="h3">Heading h3</h3>
					<p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi modi minima quis qui iste temporibus asperiores vero possimus, aspernatur consequatur esse delectus, iure nihil ipsam, corporis debitis. Corrupti nam laborum laboriosam minima aliquid facere maxime at hic obcaecati vitae quos, deserunt officia amet quis similique fugit autem sunt illo.</p>
					<p className="p2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolorem accusamus natus magnam facere iure sapiente alias dignissimos libero odio necessitatibus tempora, illo praesentium earum possimus vero esse? Similique reprehenderit delectus doloremque veniam in modi, quas animi nesciunt eligendi aliquid nulla vitae pariatur est, quaerat quos illum perspiciatis rem nam dolorem dignissimos vel. Ipsum tempore quidem architecto repellat amet minima odit dolorem, aut, sapiente quisquam velit sed doloremque est commodi quae iste repellendus aspernatur, atque accusamus nemo. Blanditiis nihil quisquam possimus adipisci fugit iste, ad, laborum non repellendus aspernatur ea sapiente eligendi? Ea, repellat. Esse alias optio vero aliquid odio porro aut impedit molestias dignissimos beatae, doloremque officiis culpa totam nesciunt similique numquam placeat iure minus eveniet aliquam velit labore cum non. Quae tempore possimus sit praesentium, deserunt culpa nulla omnis molestias commodi id doloribus sequi quidem perspiciatis officiis animi expedita. Fugiat officia voluptatibus fugit iure quibusdam ad corporis ullam distinctio quia, ab iusto deserunt libero aliquam obcaecati repellat magni architecto beatae doloremque. Expedita quia esse aut ipsum pariatur porro rerum ad. Neque, cumque facere debitis ullam quod nostrum culpa non dolorem beatae fuga molestias. Debitis recusandae voluptatum possimus nesciunt magnam earum inventore deserunt expedita, exercitationem consequatur, sequi itaque rem.</p>
					<button type="button" className="button">
						Button
					</button>
				</div>
			</main>
			<Footer />
		</div>
	);
}
