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
	const {
		hardWords,
		isHardWordsLoading,
		hardWordsError,
	}	= useTypedSelector((state) => state.hardWords);
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

	const noHardWords = hardWords.length < 1;
	function createWordCards() {
		if (groupNumber === 6) {
			if (noHardWords) {
				return <h3 className="h3">Вы ещё не отметили ни одно слово как сложное</h3>;
			}
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
				userWord={word?.userWord}
				word={word}
				isLogged={isLogged}
				key={word.id}
			/>
		));
	}

	const pageLearned = (userPageWords
		.every((word) => word.userWord?.optional.isLearned || word.userWord?.difficulty === 'hard')
		&& groupNumber !== 6);
	const wordsClasses = `words ${pageLearned ? 'words_page-learned' : ''}`;
	function createWordsClasses() {
		let classes = 'words ';
		if (pageLearned) classes += 'words_page-learned ';
		if (noHardWords && groupNumber === 6) classes += 'words_no-words ';
		return classes;
	}
	const decorationClasses = `decoration decoration_type4 decoration_group${groupNumber}`;
	return (
		<section
			className={createWordsClasses()}
			title={pageLearned ? 'Эта страница содержит только изученные или сложные слова' : ''}
		>
			<div className={decorationClasses} />
			{(wordsError || hardWordsError) && <WordsModalError setOpenErrorModal={setWordError} />}
			<h2 className="words__heading page-textbook__heading h2">
				Слова
			</h2>
			<ul className="words__list">
				{isLoading || isHardWordsLoading
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
