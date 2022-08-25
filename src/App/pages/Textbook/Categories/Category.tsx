export enum Levels {
  A1 = 'a1',
  A2 = 'a2',
  B1 = 'b1',
  B2 = 'b2',
  C1 = 'c1',
  C2 = 'c2',
  hard = 'hard',
}

export enum Names {
  A1 = 'Beginner',
  A2 = 'Elementary',
  B1 = 'Intermediate',
  B2 = 'Upper Intermediate',
  C1 = 'Advanced',
  C2 = 'Proficiency',
  hard = 'Сложные слова',
}

interface CategoryProps {
  level: Levels;
  name: Names;
  isBig?: boolean;
}

export function Category({ level, name, isBig }: CategoryProps) {
	const categoryClasses = `category ${isBig ? 'category_big' : ''}`;
	const levelClasses = `category__level category__level_${level} h3`;

	return (
		<li className={categoryClasses}>
			<h3 className={levelClasses}>{level}</h3>
			<h4 className="category__name h4">{name}</h4>
		</li>
	);
}

Category.defaultProps = {
	isBig: false,
};
