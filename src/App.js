import React from 'react';
import { BrowserRouter as Router, /*HashRouter,*/ Switch, Route } from 'react-router-dom';
import Root from './components/pages/Root';
import { Container, Row, Col } from 'react-grid-system';
import Nav from './components/molecules/Nav';
import Footer from './components/molecules/Footer';
import './App.css';
import './media/fonts/geomanist-fonts.css';

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
					<Col style={{padding: '2em', height: '100%'}} sm={10}>
						<Row>
							<Router>
								<Routes/>
							</Router>
						</Row>
						<Row>
							<Footer/>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;