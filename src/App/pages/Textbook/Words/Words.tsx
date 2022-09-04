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
import { getHardWordsAction } from '../../../store/reducers/hardWords/actions/getHardWordsAction';

export function Words() {
	const {
		userPageWords,
		error,
		isLoading,
		groupNumber,
		pageNumber,
		pagesPerGroup,
	} = useTypedSelector((state) => state.words);
	const { hardWords } = useTypedSelector((state) => state.hardWords);
	const { isLogged } = useTypedSelector((state) => state.user);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(getWordsAction(groupNumber, pageNumber));
		dispatch(getHardWordsAction());
	}, [dispatch, groupNumber, pageNumber]);

	const [wordsError, setWordError] = useState(!!error);
	useEffect(() => {
		setWordError(!!error);
	}, [error]);

	function createWordCards() {
		if (groupNumber === 6) {
			return hardWords.map((word) => (
				<WordCard
					word={word}
					isLogged={isLogged}
					key={word.id}
					forHardWords
				/>
			));
		}
		return userPageWords.map((word) => (
			<WordCard
				word={word}
				isLogged={isLogged}
				key={word.id}
			/>
		));
	}

	const decorationClasses = `decoration decoration_type4 decoration_group${groupNumber}`;
	return (
		<section className="words">
			<div className={decorationClasses} />
			{wordsError && <WordsModalError setOpenErrorModal={setWordError} />}
			<h2 className="page-textbook__heading h2">Слова</h2>
			<ul className="words__list">
				{isLoading
					? <Loader />
					: createWordCards()}
			</ul>
			{groupNumber !== 6
				&& (
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
				)}
		</section>
	);
}
