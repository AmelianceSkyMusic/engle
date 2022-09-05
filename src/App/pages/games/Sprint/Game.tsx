import { IUserPageWord } from '../../../types/interfaces';

interface IGameProps {
	words: IUserPageWord[];
}

export function Game({ words }: IGameProps) {
	return (
		<div className="sprint-game row">
			<div className="sprint-game__col sprint-game__col_left col-4">
				<div className="sprint-game__check sprint-game__check_1  icon icon--check sprint-game__row-1" />
				<p className="sprint-game__curr-points p1 sprint-game__row-2">10 очков</p>
				<h3 className="sprint-game__eng-word h3 sprint-game__row-3">Pasta</h3>
				<button type="button" className="sprint-game__wrong-btn button sprint-game__row-4">
					<span className="icon icon--arrow-left" />
					Неверно
				</button>
			</div>
			<div className="sprint-game__col sprint-game__col_center col-4">
				<div className="sprint-game__check sprint-game__check_2 icon icon--check sprint-game__row-1" />
				<p className="sprint-game__coff p1 sprint-game__row-2">x2</p>
				<h3 className="sprint-game__question-mark h3 sprint-game__row-3">?</h3>
				<h4 className="sprint-game__counter h4 sprint-game__row-4">60</h4>
			</div>
			<div className="sprint-game__col sprint-game__col_right col-4">
				<div className="sprint-game__check sprint-game__check_3 icon icon--check sprint-game__row-1" />
				<p className="sprint-game__overall-points p1 sprint-game__row-2">Всего очков: 20</p>
				<h3 className="sprint-game__ru-word h3 sprint-game__row-3">Лололаоала</h3>
				<button type="button" className="sprint-game__correct-btn button sprint-game__row-4">
					Верно
					<span className="icon icon--arrow-right" />
				</button>
			</div>
		</div>
	);
}
