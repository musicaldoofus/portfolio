import React, { Component } from 'react';
import Page from '../';
import H, { P } from '../../atoms/Text';
import './Home.css';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			verb: 'design'
		};
	}
	
	componentDidMount() {
		
	}
	
	render () {
		return (
			<Page className="home">
				<div>
					<H size="xlg">Hey there.</H>
					<H size="md">I {this.state.verb}</H>
					<P>I'm a learning design professional with blah blah who cares, am I right</P>
				</div>
			</Page>
		);
	}
}

export default Home;