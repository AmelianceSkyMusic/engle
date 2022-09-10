export function InputEmail() {
	return (
		<label htmlFor="email">
			<p className="p2">E-mail*:</p>
			<input required name="email" type="email" placeholder="Введите электронную почту" />
		</label>
	);
}
