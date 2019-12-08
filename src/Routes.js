import React from 'react';
import Root from './components/pages/Root';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
	return (
		<Switch>
			<Route
				exact
				path="/"
				component={Root}
			/>
		</Switch>
	);
}

export default Routes;