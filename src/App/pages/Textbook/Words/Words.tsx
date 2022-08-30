import { useEffect, useState } from 'react';

import { WordCard } from './WordCard';
import { Button } from '../../../../asmlib/asm-ui/components/Button';
import { Loader } from '../../../../asmlib/asm-ui/components/Loader';
import { WordsModalError } from './WordsModalError';
import { useTypedDispatch } from '../../../store/hooks/useTypedDispatch';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';
import { getWordsAction } from '../../../store/reducers/words/actions/getWordsAction';
import { getNextPageAction } from '../../../store/reducers/words/actions/getNextPageAction';
import { getPrevPageAction } from '../../../store/reducers/words/actions/getPrevPageAction';

export function Words() {
	const {
		error,
		isLoading,
		userPageWord,
		groupNumber,
		pageNumber,
		pagesPerGroup,
	} = useTypedSelector((state) => state.words);

	const dispatch = useTypedDispatch();
	useEffect(() => {
		dispatch(getWordsAction(groupNumber, pageNumber));
	}, [dispatch, groupNumber, pageNumber]);

	const [wordsError, setWordError] = useState(!!error);
	useEffect(() => {
		setWordError(!!error);
	}, [error]);
	return (
		<div className="words">
			{wordsError && <WordsModalError setOpenErrorModal={setWordError} />}
			<h2 className="page-textbook__heading h2">Слова</h2>
			<ul className="words__list">
				{isLoading
					? <Loader />
					: userPageWord?.map((word) => <WordCard word={word} key={word.id} />)}
			</ul>
			<div className="words__pagination">
				<Button
					callback={() => dispatch(getPrevPageAction(pageNumber))}
					type="secondary"
					buttonClass="button-icon"
					icon="icon--arrow-left"
				>
					prev
				</Button>
				<p className="words__page-counter p1">
					{pageNumber + 1}
					{' / '}
					{pagesPerGroup}
				</p>
				<Button
					callback={() => dispatch(getNextPageAction(pageNumber, pagesPerGroup - 1))}
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
