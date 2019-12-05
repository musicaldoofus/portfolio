import React from 'react';
//import Routes from './Routes';
import ErrorBoundary from './components/molecules/ErrorBoundary';
import { Container, Row, Col } from 'react-grid-system';
import Nav from './components/molecules/Nav';
import './App.css';

const App = () => {
	return (
		<div className="app">
			<ErrorBoundary>
				<Container fluid>
					<Row>
						<Col sm={2}>
							<Nav/>
						</Col>
						<Col sm={10}>
							<header>Hi there, I'm Michael. I build learning solutions that <span className="accent">empower people</span> and <span className="accent">create impact</span>.</header>
						</Col>
					</Row>
				</Container>
			</ErrorBoundary>
		</div>
	);
}

export default App;