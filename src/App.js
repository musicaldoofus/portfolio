import React, { Component } from 'react';
import Routes from './Routes';
import NavWithRouter from './components/organisms/Nav';
import Background from './components/atoms/Background';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="app-container">
					<Routes>
						<NavWithRouter/>				
					</Routes>
					<Background/>
				</div>
			</div>
		);
	}
}

export default App;