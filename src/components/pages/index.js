import React, { Component } from 'react';
import { TweenMax } from 'gsap';
import './Page.css';

class Page extends Component {
	componentDidMount() {
		window.setTimeout(() => this.props.handleColorFocusChange(this.props.colorFocus), 500);
	}
	
	render() {
		return (
			<main id="main" role="main">
				<div className={`page${this.props.className ? ' ' + this.props.className : ''}`}>
					<div>{this.props.children}</div>
				</div>
			</main>
		);
	}
}

export default Page;