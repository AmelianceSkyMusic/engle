import ReactDOM from 'react-dom/client';
import './index.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
