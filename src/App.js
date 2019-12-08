import React, { useState } from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import Root from './components/pages/Root';
import { Container, Row, Col } from 'react-grid-system';
import Nav from './components/molecules/Nav';
import HamburgerMenu from './components/molecules/HamburgerMenu';
import './App.css';
import './media/fonts/geomanist-fonts.css';

const withRouter = () => {
	const isGHPages = window.location.href.indexOf('github') > -1;
	return isGHPages ? (
		<HashRouter>
			<Routes/>
		</HashRouter>
	) : (
		<Router>
			<Routes/>
		</Router>
	);
}

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

const App = () => {
	const [isHamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburgerOpen = () => setHamburgerOpen(!isHamburgerOpen);

	return (
		<div className="app">
			<Container fluid style={{height: '100%'}}>
				<Row style={{height: '100%'}}>
					<Nav onClick={toggleHamburgerOpen}/>
					<Col style={{padding: '2em', height: '100%', overflowY: 'visible'}} sm={10}>
						<Row>
							{withRouter()}
						</Row>
					</Col>
				</Row>
			</Container>
			{isHamburgerOpen && <HamburgerMenu onClick={toggleHamburgerOpen}/>}
		</div>
	);
}

export default App;