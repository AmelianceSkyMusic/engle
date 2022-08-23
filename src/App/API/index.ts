import { getWords } from './words/getWords';
import { getWordsByID } from './words/getWordByID';

import { signIn } from './login/signIn';

import { createNewUser } from './users/createNewUser';
import { getUser } from './users/getUser';
import { updateUser } from './users/updateUser';
import { deleteUser } from './users/deleteUser';
import { getNewUserToken } from './users/getNewUserToken';

import { createUserWord } from './users/words/createUserWord';
import { getUserWords } from './users/words/getUserWords';
import { getUserWordByID } from './users/words/getUserWordByID';
import { updateUserWord } from './users/words/updateUserWord';
import { deleteUserWord } from './users/words/deleteUserWord';

import { getUserSettings } from './users/settings/getUserSettings';
import { updateUserSettings } from './users/settings/updateUserSettings';

import { getUserStatistics } from './users/statistic/getUserStatistic';
import { updateUserStatistics } from './users/statistic/updateUserStatistic';

import { getUserAggregateWords } from './users/aggregatedWords/getUserAggregateWords';
import { getUserAggWordsByID } from './users/aggregatedWords/getUserAggregateWordsByID';

export default {
	getWords,
	getWordsByID,

	signIn,

	createNewUser,
	getUser,
	updateUser,
	deleteUser,
	getNewUserToken,
	getUserWords,

	createUserWord,
	getUserWordByID,
	updateUserWord,
	deleteUserWord,

	getUserSettings,
	updateUserSettings,

	getUserStatistics,
	updateUserStatistics,

	getUserAggregateWords,
	getUserAggWordsByID,
};
