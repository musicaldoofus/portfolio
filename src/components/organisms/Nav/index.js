import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { P } from '../../atoms/Text';
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
			<div><P size="sm" className="bold">{children ? children : label}</P></div>
		</Link>
	);
}

const Icon = ({to, iconType, imgSrc}) => (
	<a aria-label={`Visit my ${iconType} profile`} href={to} className={`icon ${iconType}`}>
		<img alt={`link to ${iconType}`} src={imgSrc}/>
	</a>
);

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			activePageIndex: 0
		};
	}
	
	render() {
		const HomeBtn = <NavLink to="/">re:learn</NavLink>;
		const AboutBtn = <NavLink to="/about">about</NavLink>;
		const WorkBtn = <NavLink to="/work">work</NavLink>;
		const GhBtn = <Icon to={githubProfile} iconType="github" imgSrc={githubLogo}/>;
		const LiBtn = <Icon to={linkedInProfile} iconType="linkedIn" imgSrc={linkedInLogo}/>;
		return (
			<nav name="navigation bar" className="nav" role="navigation" id="nav">
				{HomeBtn}
				<div>
					{AboutBtn}
					{WorkBtn}
					{GhBtn}
					{LiBtn}
				</div>
			</nav>
		);
	}
}

export default Nav;