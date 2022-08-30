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
	const categoryClasses = `category ${isBig ? 'category_big' : ''}`;
	const levelClasses = `category__level category__level_${group} h3`;

	return (
		<li className={categoryClasses}>
			<h3 className={levelClasses}>{levels[group]}</h3>
			<h4 className="category__name h4">{name}</h4>
		</li>
	);
}

Category.defaultProps = {
	isBig: false,
};
