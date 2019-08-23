import React, { Fragment } from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Background from './components/atoms/Background';

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

const Routes = (props) => {
	console.log('<Routes>', props);
	const { colorFocus, prevColorFocus, updateColor, children } = props;
	const r = (
		<Fragment>
			{React.Children.map(children, (C) => React.cloneElement(C, {...props}))}
			<main className={colorFocus.label} id="main" role="main">
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => <Home colorFocus={colorFocus} updateColor={updateColor} {...props}/>}
					/>
					<Route
						path="/about"
						render={(props) => <About colorFocus={colorFocus} updateColor={updateColor} {...props}/>}
					/>
					<Route
						path="/work"
						render={(props) => <Work colorFocus={colorFocus} updateColor={updateColor} {...props}/>}
					/>
					<Route
						path="/resume"
						render={(props) => <Resume colorFocus={colorFocus} updateColor={updateColor} {...props}/>}
					/>
					<Route
						path="/contact"
						render={(props) => <Contact colorFocus={colorFocus} updateColor={updateColor} {...props}/>}
					/>
				</Switch>
				<Background colorFocus={colorFocus} prevColorFocus={prevColorFocus}/>
			</main>
		</Fragment>
	);
	if (window.location.href.indexOf('github.io') > -1) return withHashRouter(r); //required to work in gh-pages
	else return withBrowserRouter(r);
}

export default Routes;