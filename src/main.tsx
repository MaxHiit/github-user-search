import React from 'react';
import ReactDOM from 'react-dom/client';
import { UsersProvider } from './context/userContext.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<UsersProvider>
			<App />
		</UsersProvider>
	</React.StrictMode>
);
