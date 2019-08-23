import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../molecules/Footer';
import './Nav.css';

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			isCollapsed: false
		};
		this.handleToggleCollapse = this.handleToggleCollapse.bind(this);
	}
	
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
	
	handleToggleCollapse() {
		// const btn = this.chevronButtonRef.current;
		// const btnPosX = btn.getBoundingClientRect().x;
		// TweenLite.to(this.chevronButtonRef.current, 0.6, {x: btnPosX -100});
	}
	
	componentDidUpdate(prevProps) {
		// console.log('<Nav> update', prevProps, this.props);
		this.updateColor();
	}
	
	shouldComponentUpdate(prevProps) {
		return prevProps.location !== this.props.location;
	}
	
	render() {
		return (
			<nav name="navigation bar" role="navigation" id="nav-bar" className={`nav-bar ${this.state.isCollapsed ? 'collapsed' : 'expanded'}`}>
				<Footer/>
			</nav>
		);
	}
}

const NavWithRouter = withRouter(Nav);

export default NavWithRouter;