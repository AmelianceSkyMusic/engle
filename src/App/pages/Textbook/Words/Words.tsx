import { useEffect } from 'react';
import { WordCard } from './WordCard';
import { Button } from '../../../../asmlib/asm-ui/components/Button';
import { useTypedDispatch } from '../../../store/hooks/useTypedDispatch';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { getWordsAction } from '../../../store/reducers/words/actions/getWordsAction';

export function Words() {
	const { userPageWord, groupNumber, pageNumber } = useTypedSelector((state) => state.words);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(getWordsAction(groupNumber, pageNumber));
		console.log(groupNumber);
		console.log(pageNumber);
	}, [dispatch, groupNumber, pageNumber]);

	return (
		<div className="words">
			<h2 className="page-textbook__heading h2">Слова</h2>
			<ul className="words__list">
				{userPageWord?.map((word) => <WordCard word={word} key={word.id} />)}
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
