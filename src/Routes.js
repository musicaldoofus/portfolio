import React, { Fragment } from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';

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
	const withProps = (C) => <C {...props}/>;
	const { colorFocus, handleColorFocusChange, children } = props;
	const r = (
		<Fragment>
			{React.Children.map(children, (C) => React.cloneElement(C, {...props}))}
			<Switch>
				<Route
					exact
					path="/"
					render={(props) => <Home colorFocus={colorFocus} handleColorFocusChange={handleColorFocusChange} {...props}/>}
				/>
				<Route
					path="/about"
					render={(props) => <About colorFocus={colorFocus} handleColorFocusChange={handleColorFocusChange} {...props}/>}
				/>
				<Route
					path="/work"
					render={(props) => <Work colorFocus={colorFocus} handleColorFocusChange={handleColorFocusChange} {...props}/>}
				/>
				<Route
					path="/resume"
					render={(props) => <Resume colorFocus={colorFocus} handleColorFocusChange={handleColorFocusChange} {...props}/>}
				/>
				<Route
					path="/contact"
					render={(props) => <Contact colorFocus={colorFocus} handleColorFocusChange={handleColorFocusChange} {...props}/>}
				/>
			</Switch>
		</Fragment>
	);
	if (window.location.href.indexOf('github.io') > -1) return withHashRouter(r); //required to work in gh-pages
	else return withBrowserRouter(r);
}

export default Routes;