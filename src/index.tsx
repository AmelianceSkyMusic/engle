import './index.scss';

import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './App/store';

import App from './App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
	<Provider store={store}>
		<BrowserRouter basename="/engle">
			<App />
		</BrowserRouter>
	</Provider>,
);
