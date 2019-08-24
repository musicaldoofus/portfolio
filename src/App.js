import React, { Component } from 'react';
import Routes from './Routes';
import NavWithRouter from './components/organisms/Nav';
import colors from './utils/colors';
import './App.css';

class App extends Component {
	constructor() {
		super();
		const colorFocus = colors[Math.floor(Math.random() * colors.length)];
		const prevColorFocus = colors.filter(color => color.label !== colorFocus.label)[0];
		this.state = {
			colorFocus,
			prevColorFocus
		};
		this.handleUpdateColorFocus = this.handleUpdateColorFocus.bind(this);
	}
	
	handleUpdateColorFocus() {
		const prevColorFocus = this.state.colorFocus;
		const availableColors = colors.filter(color => color.label !== this.state.colorFocus.label);
		console.log('availableColors', availableColors);
		const ind = Math.floor(Math.random() * availableColors.length);
		const colorFocus = availableColors[ind];
		console.log('handleUpdateColorFocus', colorFocus);
		this.setState({colorFocus, prevColorFocus});
	}
	
	render() {
		return (
			<div className="app">
				<div className="app-container">
					<Routes colorFocus={this.state.colorFocus} prevColorFocus={this.state.prevColorFocus}>
						<NavWithRouter onUpdate={this.handleUpdateColorFocus}/>				
					</Routes>
				</div>
			</div>
		);
	}
}

export default App;