import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import H, { P } from '../../atoms/Text';
import './Nav.css';
import githubLogo from '../../../media/svg/github-mark.svg';
import linkedInLogo from '../../../media/svg/linkedin-bug.svg';

const githubProfile = 'https://github.com/musicaldoofus';
const linkedInProfile = '';

const NavLink = ({to, children, label}) => {
	const href = window.document.location.href;
	const isActive = to === '/' ? href === '' || href === '/' : href.indexOf(to) > -1;
	return (
		<Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
			<div><P><span>{to}</span></P></div>
		</Link>
	);
}

class Nav extends Component {
	render() {
		return (
			<nav name="navigation bar" role="navigation" id="nav-bar">
				<div>
					<Link to="/">
						<H size="sm">Michael Burns</H>
						<P>Learning Experience Designer</P>
					</Link>
					<hr/>
				</div>
				<div id="grid-gutter"></div>
				<div id="nav-links">
					<NavLink to="/about"/>
					<NavLink to="/resume"/>
					<NavLink to="/work"/>
				</div>
				<div id="grid-gutter"></div>
				<div>
				
				</div>
			</nav>
		);
	}
}

export default Nav;