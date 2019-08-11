import React, { Component } from 'react';
import Page from '../';
import H, { P, HR } from '../../atoms/Text';
import Button from '../../atoms/Button';
import './About.css';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			yCacl: null
		};
	}
	
	componentDidMount() {
		window.setTimeout(() => this.setState({isLoaded: true}), 400);
	}
	
	render() {
		return (
			<Page className="about">
				{this.state.isLoaded &&
					<div>
						<H size="xlg">
							About me
						</H>
					</div>
				}
			</Page>
		);
	}
}

export default About;