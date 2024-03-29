import { Route, Routes } from 'react-router-dom';

import { Main } from './pages/Main';
import { Textbook } from './pages/Textbook';
import { Audiocall } from './pages/games/Audiocall';
import { Sprint } from './pages/games/Sprint';
import { Statistics } from './pages/Statistics';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { LongTermStat } from './pages/Statistics/LongTermStat';
import { UserCreateStatMarkup } from './pages/Statistics/UserStatistic';

function App() {
	document.body.classList.add('scroll');
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/textbook" element={<Textbook />} />
			<Route path="/audiocall" element={<Audiocall />} />
			<Route path="/sprint" element={<Sprint />} />
			<Route path="/statistics/*" element={<Statistics />}>
				<Route path="long" element={<LongTermStat />} />
				<Route path="simple" element={<UserCreateStatMarkup />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/registration" element={<Registration />} />
		</Routes>
	);
}

export default App;
