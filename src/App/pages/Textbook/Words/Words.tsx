import { useEffect, useState } from 'react';
import API from '../../../API';
import { WordCard } from './WordCard';
import { IWord } from '../../../types/interfaces';
import { Button } from '../../../../asmlib/asm-ui/components/Button';

export function Words() {
	const [words, setWords] = useState<IWord[]>();

	async function getWords() {
		const response = await API.getWords(1, 1);
		setWords(response);
	}
	useEffect(() => {
		getWords();
	});

	return (
		<div className="words">
			<h2 className="page-textbook__heading h2">Слова</h2>
			<ul className="words__list">
				{words?.map((word) => <WordCard word={word} key={word.id} />)}
			</ul>
			<div className="words__pagination">
				<Button
					callback={() => console.log('prev page')}
					type="secondary"
					buttonClass="button-icon"
					icon="icon--arrow-left"
				>
					prev
				</Button>
				<p className="words__page-counter p1">10 / 30</p>
				<Button
					callback={() => console.log('next page')}
					type="secondary"
					buttonClass="button-icon"
					icon="icon--arrow-right"
				>
					next
				</Button>
			</div>
		</div>
	);
}
