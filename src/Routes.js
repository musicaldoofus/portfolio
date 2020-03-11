import React from 'react';
import Root from './components/views/Root';
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
		</Switch>
	);
}

export default Routes;