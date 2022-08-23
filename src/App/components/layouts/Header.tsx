import { Navigation, NavigationProps } from '../Navigation';

export function Header({ logoOnly }: NavigationProps) {
	return (
		<header className="header">
			<div className="container">
				<Navigation {... { logoOnly }} />
			</div>
		</header>
	);
}
