import React, { Component } from 'react';
import Routes from './Routes';
import NavWithRouter from './components/organisms/Nav';
import Background from './components/atoms/Background';
import colors from './utils/colors';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			colorFocus: colors[Math.floor(Math.random() * 4)]
		};
		this.handleColorFocusChange = this.handleColorFocusChange.bind(this);
	}
	
	handleColorFocusChange(color) {
		console.log(color);
		this.setState({colorFocus: color});
	}
	
	render() {
		// console.log('s', this.state.colorFocus);
		return (
			<div className="app">
				<div className="app-container">
					<Routes colorFocus={this.state.colorFocus} handleColorFocusChange={this.handleColorFocusChange}>
						<NavWithRouter/>				
					</Routes>
					<Background/>
				</div>					
			</div>
		);
	}
}

export default App;