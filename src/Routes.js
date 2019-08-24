import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
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

class Routes extends Component {
	constructor(props) {
		super(props);
	}
	
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
	
	render() {
		console.log('<Routes>', this.props);
		const { colorFocus, prevColorFocus, updateColor, children } = this.props;
		const cloneProps = { colorFocus, prevColorFocus, updateColor, children };
		const r = (
			<Fragment>
				{React.Children.map(children, (C) => React.cloneElement(C, {...cloneProps}))}
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
}

export default Routes;