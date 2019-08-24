import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			transitionComplete: false
		};
		this.handleUpdateLayout = this.handleUpdateLayout.bind(this);
	}
	
	handleUpdateLayout() {
		this.setState({transitionComplete: true});
	}
	
	componentDidMount() {
		window.setTimeout(this.handleUpdateLayout, 600);
	}
	
	render() {
		return (
			<div className={`page ${this.state.transitionComplete ? 'static' : 'transitioning'}`}>
				<div>{this.props.children}</div>
			</div>
		);
	}
}

export default Page;