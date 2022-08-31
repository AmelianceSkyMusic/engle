import { HeaderPanel, IHeaderPanelProps } from '../HeaderPanel';

type THeaderProps = IHeaderPanelProps

export function Header({ isHideRegistration }: THeaderProps) {
	return (
		<header className="header">
			<div className="container">
				<HeaderPanel isHideRegistration={isHideRegistration} />
			</div>
		</header>
	);
}
