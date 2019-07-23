import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import './App.css';

function App() {
	return (
		<HashRouter>
			<Switch>
				<Route
					exact
					path="/"
					render={() => <Redirect to="/about"/>}
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
					path="/contact"
					component={Contact}
				/>
			</Switch>
		</HashRouter>
	);
}

export default App;