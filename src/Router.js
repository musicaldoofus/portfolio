import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Routes from './Routes';

const Router = () => {
	const isGHPages = window.location.href.indexOf('github') > -1;
	return isGHPages ? (
		<HashRouter>
			<Routes/>
		</HashRouter>
	) : (
		<BrowserRouter>
			<Routes/>
		</BrowserRouter>
	);
}

export default Router;