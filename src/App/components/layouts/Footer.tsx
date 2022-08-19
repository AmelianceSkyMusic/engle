export function Footer() {
	return (
		<footer className="footer">
			<div className="container row">
				<div className="footer__github-logo col-3 col-xs-6">
					<a className="link inversed github-logo" target="_blank" href="https://github.com/" rel="noreferrer">{}</a>
				</div>
				<div className="footer__names col-6 col-xs-12">
					<a className="link inversed" target="_blank" href="https://dribbble.com/" rel="noreferrer">Dima</a>
					<a className="link inversed" target="_blank" href="https://dribbble.com/" rel="noreferrer">Max</a>
					<a className="link inversed" target="_blank" href="https://dribbble.com/" rel="noreferrer">AmelianceSkyMusic</a>
				</div>
				<div className="footer__rsschool-logo col-3 col-xs-6">
					<a className="link inversed rsschool-logo" target="_blank" href="https://rs.school/js/" rel="noreferrer">{}</a>
				</div>
			</div>
		</footer>
	);
}
