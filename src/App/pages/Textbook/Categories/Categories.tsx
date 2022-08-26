import { Category, Levels, Names } from './Category';

export function Categories() {
	return (
		<div className="categories">
			<h2 className="page-textbook__heading h2">Категории</h2>
			<ul className="categories__list row">
				<div className="categories__column col-3 col-xx-4 col-lg-6 col-md-12">
					<Category {...{ level: Levels.A1, name: Names.A1 }} />
					<Category {...{ level: Levels.A2, name: Names.A2 }} />
				</div>
				<div className="categories__column col-3 col-xx-4 col-lg-6 col-md-12">
					<Category {...{ level: Levels.B1, name: Names.B1 }} />
					<Category {...{ level: Levels.B2, name: Names.B2 }} />
				</div>
				<div className="categories__column col-3 col-xx-4 col-lg-6 col-md-12">
					<Category {...{ level: Levels.C1, name: Names.C1 }} />
					<Category {...{ level: Levels.C2, name: Names.C2 }} />
				</div>
				<div className="categories__column col-3 col-xx-4 col-lg-6 col-md-12">
					<Category {...{ level: Levels.hard, name: Names.hard, isBig: true }} />
				</div>
			</ul>
		</div>
	);
}
