import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';

interface IGameProps {
	name: string;
	description: string;
	imageSrc: string;
	gameLink: string;
}

export function Game({
	name, description, imageSrc, gameLink,
}: IGameProps) {
	const { groupNumber, pageNumber } = useTypedSelector((state) => state.words);
	return (
		<div className="game row">
			<img src={imageSrc} alt={name} className="game__image col-6 col-md-12" />
			<li className="game__info col-6 col-md-12">
				<h4 className="game__name h4">{name}</h4>
				<p className="game__description p1">{description}</p>
				<Link to={gameLink} state={{ groupNumber, pageNumber }}>
					<button type="button" className="game__link button-sm">Играть</button>
				</Link>
			</li>
		</div>
	);
}
