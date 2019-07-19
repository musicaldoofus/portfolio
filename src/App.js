import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './utils/routes';
import './App.css';

function App() {
	const appRoutes = routes.map(r => <Route key={r.path} {...r}/>);
	return (
		<Router>
			<Switch>
				{appRoutes}
			</Switch>
		</Router>
	);
}

export default App;