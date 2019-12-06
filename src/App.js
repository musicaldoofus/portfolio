import React from 'react';
import { BrowserRouter as Router, /*HashRouter,*/ Switch, Route } from 'react-router-dom';
//import Routes from './Routes';
//import ErrorBoundary from './components/molecules/ErrorBoundary';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import Spacer from './components/atoms/Spacer';
import Nav from './components/molecules/Nav';
import Header, { Body } from './components/atoms/Text';
import './App.css';
import './media/fonts/geomanist-fonts.css';

const Root = ({match}) => {
	return (
		<Col style={{padding: '2em', height: '100%'}} sm={10}>
			<Header>Hi there, I'm Michael.</Header>
			<Spacer/>
			<Body size="lg"> I build learning solutions that <span className="accent">empower people</span> and <span className="accent">create impact</span>.</Body>
		</Col>
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
	return (
		<div className="app">
			<Container fluid style={{height: '100%'}}>
				<Row style={{height: '100%'}}>
					<Nav/>
					<Router>
						<Routes/>
					</Router>
				</Row>
			</Container>
		</div>
	);
}

export default App;