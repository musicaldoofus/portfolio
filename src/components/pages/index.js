import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageStyle: {
				margin: 'auto'
			},
			navBtnStyleUp: {
				opacity: 0
			},
			transitionComplete: false
		};
		this.pageRef = React.createRef();
		this.setTransitionMargin = this.setTransitionMargin.bind(this);
		this.updateNavBtnStyle = this.updateNavBtnStyle.bind(this);
	}
	
	componentDidMount() {
		window.addEventListener('resize', this.updateNavBtnStyle);
		const mainBoundingRect = document.querySelector('main').getBoundingClientRect();
		const negSpaceTop = (mainBoundingRect.height - this.pageRef.current.getBoundingClientRect().height)/2;
		const topMargin = this.props.className === 'home' ? 'auto' : `${negSpaceTop}px`;
		const pageStyle = { margin: `${topMargin} auto` };
		const navBtnStyleUp = { top: negSpaceTop, opacity: 0.8, left: '50%', transform: 'translateX(-50%)'};
		window.setTimeout(() => this.setState({
			pageStyle,
			navBtnStyleUp
		}, () => this.setTransitionMargin()
		), 100);
	}
	
	updateNavBtnStyle(e) {
		if (!this.pageRef.current) return; //avoid lifecycle sync errors
		const mainBoundingRect = document.querySelector('main').getBoundingClientRect();
		const negSpaceTop = (mainBoundingRect.height - this.pageRef.current.getBoundingClientRect().height)/2;
		const navBtnStyleUp = { top: negSpaceTop, opacity: 0.8, left: '50%', transform: 'translateX(-50%)'};
		this.setState({
			navBtnStyleUp
		});
	}
	
	setTransitionMargin() {
		if (this.props.className === 'home') return;
		window.setTimeout(() => this.setState({
			pageStyle: { margin: '0 auto' }
		}), 1000);
	}
	
	render() {
		const propsStyle = this.props.style ? this.props.style : {};
		const style = Object.assign({}, this.state.pageStyle, propsStyle);
		return (
			<div ref={this.pageRef} style={style} className="page">
				<div>{this.props.children}</div>
			</div>
		);
	}
}

export default Page;