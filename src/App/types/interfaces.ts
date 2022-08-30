export interface IWord {
	id: string;
	group: number;
	page: number;
	word: string;
	image: string;
	audio: string;
	audioMeaning: string;
	audioExample: string;
	textMeaning: string;
	textExample: string;
	transcription: string;
	wordTranslate: string;
	textMeaningTranslate: string;
	textExampleTranslate: string;
}

export interface IAuthentication {
	message: string;
	token: string;
	refreshToken:	string;
	userId:	string;
	name: string;
}

export interface IUser {
	name: string;
	email: string;
	password: string;
}

export interface IUserWord {
	difficulty: 'hard' | 'easy';
	optional: {
		isLearned: boolean;
		audioCall: {
			right: number;
			wrong: number;
		};
		sprint: {
			right: number;
			wrong: number;
		};
	};
}

export interface IStatistic {
	learnedWords: number;
	optional: {
		textBook: {
			newWords: {
				[date: string]: string[]; // {'date': ['id', 'id'...], ...}
			};
			learnedWords: {
				[date: string]: string[];
			};
			countNewWords: number;
		};
		audioCall: {
			newWords: {
				[date: string]: string[];
			};
			countNewWords: number;
			countRight: number;
			countWrong: number;
			topRight: number;
		};
		sprint: {
			newWords: {
				[date: string]: string[];
			};
			countNewWords: number;
			countShowedWords: number;
			countRight: number;
			countWrong: number;
			topRight: number;
		};
	};
}

export interface ISetting {
	wordsPerDay: number;
	optional: {
		[key: string]: unknown;
	};
}

export interface IUserPageWords extends IWord {
	userWord?: IUserWord;
}

export interface IAggregateUserWords extends IWord {
	_id: string;
	group: number;
	page: number;
	word: string;
	image: string;
	audio: string;
	audioMeaning: string;
	audioExample: string;
	textMeaning: string;
	textExample: string;
	transcription: string;
	textExampleTranslate: string;
	textMeaningTranslate: string;
	wordTranslate: string;
	userWord: IUserWord[];
}

export interface IAggregateUserWordsData {
	paginatedResults: IAggregateUserWords[];
	totalCount: { count: number }[];
}
