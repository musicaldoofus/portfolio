import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import './App.css';

function App() {
	return (
		<HashRouter onUpdate={() => window.scrollTo(0, 0)}>
			<Switch>
				<Route
					exact
					path="/"
					component={Home}
				/>
				<Route
					path="/work"
					component={Work}
				/>
				<Route
					path="/about"
					component={About}
				/>
			</Switch>
		</HashRouter>
	);
}

export default App;