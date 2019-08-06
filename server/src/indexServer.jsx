import React from 'react';
import { StaticRouter } from 'react-router';
import App from 'app';

export const ServerSideApp = () => (
	<StaticRouter>
		<App appVersion={APP_VERSION} />
	</StaticRouter>
);
