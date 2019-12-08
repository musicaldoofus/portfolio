import React, { useState } from 'react';
import { Container, Row } from 'react-grid-system';
import Nav from './components/molecules/Nav';
import HamburgerMenu from './components/molecules/HamburgerMenu';
import MainView from './MainView';
import './App.css';
import './media/fonts/geomanist-fonts.css';

const App = () => {
	const [isHamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburgerOpen = () => setHamburgerOpen(!isHamburgerOpen);

	return (
		<div className="app">
			<Container fluid style={{height: '100%'}}>
				<Row style={{height: '100%'}}>
					<Nav onClick={toggleHamburgerOpen}/>
					<MainView/>
				</Row>
			</Container>
			{isHamburgerOpen && <HamburgerMenu onClick={toggleHamburgerOpen}/>}
		</div>
	);
}

export default App;