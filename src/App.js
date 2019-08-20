import React, { Component } from 'react';
import Routes from './Routes';
import NavWithRouter from './components/organisms/Nav';
import Background from './components/atoms/Background';
import colors from './utils/colors';
import './App.css';

class App extends Component {
	constructor() {
		super();
		const colorFocus = colors.slice()[Math.floor(Math.random() * 4)];
		this.state = {
			colorFocus,
			remainingColors: colors.slice().filter(c => c.label !== colorFocus.label)
		};
		this.updateColor = this.updateColor.bind(this);
	}
	
	// componentDidMount() {
		// console.log('mount <App>', this.state);
	// }
	
	updateColor() {
		const ind = Math.floor(Math.random() * 3)
		const colorFocus = this.state.remainingColors[ind];
		const remainingColors = colors.filter(c => c.label !== colorFocus.label);
		this.setState({
			colorFocus,
			remainingColors
		}, () => console.log(this.state));
	}
	
	render() {
		return (
			<div className="app">
				<div className="app-container">
					<Routes colorFocus={this.state.colorFocus} updateColor={this.updateColor}>
						<NavWithRouter/>				
					</Routes>
					<Background/>
				</div>					
			</div>
		);
	}
}

export default App;