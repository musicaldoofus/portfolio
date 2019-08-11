import React, { Component } from 'react';
import Page from '../';
import H, { P } from '../../atoms/Text';
import Button from '../../atoms/Button';
import './Home.css';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			verb: 'design'
		};
	}
	
	render () {
		const colors = [
			'green',
			'purple',
			'blue',
			'brown'
		];
		const colorFocus = colors[Math.floor(Math.random() * 4)];
		const className = `accent-${colorFocus}`;
		return (
			<Page className="home">
				<H size="xlg">
					Hi there, my name's Michael.
				</H>
				<H size="lg" className={className}>
					I'm passionate about building learning experiences that create impact.
				</H>
				<Button className={`${className}-dk stretch`} onClick={this.handleClick}>Let's work together.</Button>
			</Page>
		);
	}
}

export default Home;