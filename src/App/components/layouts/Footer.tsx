export function Footer() {
	return (
		<footer className="footer">
			<div className="container row">
				<div className="footer__github-logo col-3 col-xs-6">
					<a className="link github-logo" target="_blank" href="https://github.com/" rel="noreferrer">{}</a>
				</div>
				<div className="footer__names col-6 col-xs-12">
					<a className="link inverted" target="_blank" href="https://github.com/DStukalo/" rel="noreferrer">Dima</a>
					<a className="link inverted" target="_blank" href="https://github.com/Kantor17/" rel="noreferrer">Max</a>
					<a className="link inverted" target="_blank" href="https://github.com/AmelianceSkyMusic/" rel="noreferrer">AmelianceSkyMusic</a>
					<p className="p2 footer__year">2022</p>
				</div>
				<div className="footer__rsschool-logo col-3 col-xs-6">
					<a className="link rsschool-logo" target="_blank" href="https://rs.school/js/" rel="noreferrer">{}</a>
				</div>
			</div>
		</footer>
	);
}
