import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routes from './utils/routes';
import './App.css';

function App() {
	const appRoutes = routes.map(r => <Route key={r.path} {...r}/>);
	console.log(appRoutes);
	return (
		<HashRouter>
			<Switch>
				{appRoutes}
			</Switch>
		</HashRouter>
	);
}

export default App;