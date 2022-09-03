import { Game } from './Game';
import audiocallPoster from '../../../../asmlib/asm-ui/assets/img/img--audiocall-poster.png';
import sprintPoster from '../../../../asmlib/asm-ui/assets/img/img--sprint-poster.png';

export function Games() {
	return (
		<section className="games">
			<h2 className="page-textbook__heading h2">Игры</h2>
			<ul className="games__list">
				<Game
					name="Аудиовызов"
					description="Приложение - игра на тренировку навыков аудирования.
          В процессе игры десять попыток угадать слово, произнесенное на английском языке."
					imageSrc={audiocallPoster}
					gameLink="/audiocall"
				/>
				<Game
					name="Спринт"
					description="Приложение - игра на проверку прогресса изучения английских слов.
					В процессе игры вам предстоит как можно быстрее определить верный перевод слова или нет"
					imageSrc={sprintPoster}
					gameLink="/sprint"
				/>
			</ul>

		</section>
	);
}
