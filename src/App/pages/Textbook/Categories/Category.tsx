import { useTypedDispatch } from '../../../store/hooks/useTypedDispatch';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { setGroupNumberAction } from '../../../store/reducers/words/actions/setGroupNumberAction';

export enum EGroups {
  A1,
  A2,
  B1,
  B2,
  C1,
  C2,
  hard,
}

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', ''];

export enum ENames {
  A1 = 'Beginner',
  A2 = 'Elementary',
  B1 = 'Intermediate',
  B2 = 'Upper Intermediate',
  C1 = 'Advanced',
  C2 = 'Proficiency',
  hard = 'Сложные слова',
}

interface ICategoryProps {
  group: EGroups;
  name: ENames;
  isBig?: boolean;
}

export function Category({ group, name, isBig }: ICategoryProps) {
	const { groupNumber } = useTypedSelector((state) => state.words);

	const isLogged = true; // поміняти на отримання з редаксу

	function createCategoryClasses() {
		let classes = `category category_${group} `;
		if (isBig) {
			classes += 'category_big ';
			if (!isLogged) classes += 'category_disabled ';
		}
		if (groupNumber === group) classes += 'category_active ';
		return classes;
	}

	const dispatch = useTypedDispatch();

	return (
		<button type="button" className={createCategoryClasses()} onClick={() => dispatch(setGroupNumberAction(group))}>
			<h3 className="category__level h3">{levels[group]}</h3>
			<h4 className="category__name h4">{name}</h4>
		</button>
	);
}

Category.defaultProps = {
	isBig: false,
};
