import { Navigation, INavigationProps } from '../Navigation';

export function Header({ logoOnly }: INavigationProps) {
	return (
		<header className="header">
			<div className="container">
				<Navigation {... { logoOnly }} />
			</div>
		</header>
	);
}
