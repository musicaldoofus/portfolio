import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Routes from './Routes';
import Nav from './components/containers/Nav';

const Router = () => {
	const isGHPages = window.location.href.indexOf('github') > -1;
	
	return isGHPages ? (
		<HashRouter>
			<Nav/>
			<Routes/>
		</HashRouter>
	) : (
		<BrowserRouter>
			<Nav/>
			<Routes/>
		</BrowserRouter>
	);
}

export default Router;