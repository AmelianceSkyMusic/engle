import { useEffect, useState } from 'react';
import API from '../../../API';
import { WordCard } from './WordCard';
import { IWord } from '../../../interfaces/interfaces';

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
		</div>
	);
}
