import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { Category, EGroups, ENames } from './Category';

export function Categories() {
	const { isLogged } = useTypedSelector((state) => state.user);
	return (
		<div className="categories">
			<h2 className="page-textbook__heading h2">Категории</h2>
			<ul className="categories__list row">
				<div className="categories__column col-3 col-xx-4 col-lg-6 col-md-12">
					<Category {...{ group: EGroups.A1, name: ENames.A1 }} />
					<Category {...{ group: EGroups.A2, name: ENames.A2 }} />
				</div>
				<div className="categories__column col-3 col-xx-4 col-lg-6 col-md-12">
					<Category {...{ group: EGroups.B1, name: ENames.B1 }} />
					<Category {...{ group: EGroups.B2, name: ENames.B2 }} />
				</div>
				<div className="categories__column col-3 col-xx-4 col-lg-6 col-md-12">
					<Category {...{ group: EGroups.C1, name: ENames.C1 }} />
					<Category {...{ group: EGroups.C2, name: ENames.C2 }} />
				</div>
				<div className="categories__column col-3 col-xx-4 col-lg-6 col-md-12">
					<Category {...{
						group: EGroups.hard, name: ENames.hard, isBig: true, isLogged,
					}}
					/>
				</div>
			</ul>
		</div>
	);
}
