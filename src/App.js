import React, { Fragment } from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/organisms/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import './App.css';

const withHashRouter = (routes) => (
	<HashRouter>
		{routes}
	</HashRouter>
);

const withBrowserRouter = (routes) => (
	<Router>
		{routes}
	</Router>
);

const App = () => {
	const routes = (
		<Fragment>
			<Nav/>
			<Switch>
				<Route
					exact
					path="/"
					component={Home}
				/>
				<Route
					path="/about"
					component={About}
				/>
				<Route
					path="/work"
					component={Work}
				/>
				<Route
					path="/resume"
					component={Resume}
				/>
				<Route
					path="/contact"
					component={Contact}
				/>
			</Switch>
			<div className="background-gradient"></div>
			<div className="background"></div>
		</Fragment>
	);
	if (window.location.href.indexOf('github.io') > -1) return withHashRouter(routes); //required to work in gh-pages
	else return withBrowserRouter(routes);
}

export default App;