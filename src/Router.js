import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Routes from './Routes';
import Nav from './components/containers/Nav';
import Footer from './components/containers/Footer';

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
			<Footer/>
		</BrowserRouter>
	);
}

export default Router;