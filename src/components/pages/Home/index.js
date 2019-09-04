import React, { Component } from 'react';
import Page from '../';
import H from '../../atoms/Text';
import Button from '../../atoms/Button';
import './Home.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.aboutBtnRef = React.createRef();
		this.contactBtnRef = React.createRef();
		this.workBtnRef = React.createRef();
	}
	
	render() {
		const btnStyle = {

		};
		return (
			<Page className="home">
				<div>
					<H size="xlg">Michael Burns</H>
					<H size="md">Learning Experience Designer</H>
				</div>
				<div id="home-btns">
					<Button
						ref={this.aboutBtnRef}
						isLink={true}
						to="/about"
						label="About me"
						style={btnStyle}
					/>
					<Button
						ref={this.workBtnRef}
						isLink={true}
						to="/work"
						label="My work samples"
						style={btnStyle}
					/>
					<Button
						ref={this.contactBtnRef}
						isLink={true}
						to="/resume"
						label="My work resume"
						style={btnStyle}
					/>
				</div>
			</Page>
		);
	}
}

export default Home;