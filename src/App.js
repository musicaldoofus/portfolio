import React from 'react';
//import Routes from './Routes';
import ErrorBoundary from './components/molecules/ErrorBoundary';
import { Container, Row, Col } from 'react-grid-system';
import Nav from './components/molecules/Nav';
import Header, { Body } from './components/atoms/Text';
import './App.css';
import './typography.css';
import './media/fonts/geomanist-fonts.css';

const App = () => {
	return (
		<div className="app">
			<ErrorBoundary>
				<Container fluid debug style={{height: '100%'}}>
					<Row debug style={{height: '100%'}}>
						<Col debug sm={2}>
							<Nav/>
						</Col>
						<Col debug style={{padding: '1.5em'}} sm={10} style={{height: '100%'}}>
							<Header>Hi there, I'm Michael.</Header>
							<Body size="lg"> I build learning solutions that <span className="accent">empower people</span> and <span className="accent">create impact</span>.</Body>
						</Col>
					</Row>
				</Container>
			</ErrorBoundary>
		</div>
	);
}

export default App;