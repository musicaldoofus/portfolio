import React from 'react';
import Root from './components/views/Root';
import About from './components/views/About';
import Blog from './components/views/Blog';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
	return (
		<Switch>
			<Route
				exact
				path="/"
				component={Root}
			/>
			<Route
				path="/blog"
				component={Blog}
			/>
			<Route
				path="/about"
				component={About}
			/>
		</Switch>
	);
}

export default Routes;