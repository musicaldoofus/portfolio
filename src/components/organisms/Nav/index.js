import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../../molecules/Footer';
import logo from '../../../media/svg/logo.svg';
import './Nav.css';

class Nav extends Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
	
	componentDidUpdate(prevProps) {
		this.props.onUpdate();
	}
	
	shouldComponentUpdate(prevProps) {
		return prevProps.location !== this.props.location;
	}
	
	render() {
		return (
			<nav name="navigation bar" role="navigation" id="nav-bar" className="nav-bar">
				<div id="nav-logo">
					<Link to="/">
						<img src={logo} alt=""/>
					</Link>
				</div>
				<div id="nav-links">
					<Link to="/about">/about</Link>
					<Link to="/work">/work</Link>
					<Link to="/resume">/resume</Link>
				</div>
				<Footer/>
			</nav>
		);
	}
}

const NavWithRouter = withRouter(Nav);

export default NavWithRouter;