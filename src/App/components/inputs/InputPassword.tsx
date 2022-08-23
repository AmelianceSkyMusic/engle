export function InputPassword() {
	return (
		<label htmlFor="password">
			<p className="p2">Пароль*:</p>
			<input required name="password" type="password" placeholder="Введите пароль" />
		</label>
	);
}
