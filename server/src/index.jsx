import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'app';

// APP_VERSION is set in Webpack's definePlugin

export const ClientSideApp = () => (
	<BrowserRouter>
		<App appVersion={APP_VERSION} />
	</BrowserRouter>
);
