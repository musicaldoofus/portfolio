import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import navBrand from '../../../media/svg/nav-brand.svg';
import './Nav.css';

const NavBorderLines = ({type}) => {
	useEffect(() => setMounted(true), []);

	const [isMounted, setMounted] = useState(false);

	return (
		<div className={`nav-border nav-border-${type}${isMounted ? ' mounted': ''}`}>
			<div></div>
			<div></div>
		</div>
	);
}

const NavBorder = () => {
	return (
		<Fragment>
			<Hidden xs>
				<NavBorderLines type="right"/>
			</Hidden>
			<Visible xs>
				<NavBorderLines type="bottom"/>
			</Visible>
		</Fragment>
	);
}

const NavBrand = () => {
	useEffect(() => setMounted(true), []);

	const [isMounted, setMounted] = useState(false);

	return (
		<Row style={{width: '100%'}}>
			<Col>
				<div className={`nav-brand${isMounted ? ' mounted' : ''}`}>
					<img src={navBrand} alt="Michael Burns, Learning Experience Designer"/>
				</div>
			</Col>
		</Row>
	);
}

const NavMenuExpanded = () => {
	return (
		<div className="nav-menu-expanded"></div>
	);
}

const NavHamburgerMenu = ({onClick}) => {
	useEffect(() => setMounted(true), []);

	const [isMounted, setMounted] = useState(false);

	return (
		<div className="nav-menu-hamburger">
			<div className={`nav-menu-hamburger-lines${isMounted ? ' mounted' : ''}`} onClick={onClick}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

const NavMenu = ({onClick}) => {
	return (
		<Fragment>
			<Hidden xs>
				<NavMenuExpanded/>
			</Hidden>
			<Visible xs>
				<NavHamburgerMenu onClick={onClick}/>
			</Visible>
		</Fragment>
	);
}

const Nav = ({onClick}) => {
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	const [isScrolled, setScrolled] = useState(false);

	const handleScroll = (e) => {
		console.log('handleScroll');
		setScrolled(true);
	}

	const activeShadow = '0 2px 4px 1px var(--gray-low-opacity)';
	const nullShadow = '0 0 0 0';
	const navStyle = {
		transition: 'box-shadow ease 0.4s',
		transitionDelay: '0.2s',
		boxShadow: isScrolled ? activeShadow : nullShadow
	};
	return (
		<Col sm={2} style={navStyle}>
			<nav className="nav">
				<Visible xs>
					<NavBrand/>
				</Visible>
				<Hidden xs>
					<NavBrand/>
				</Hidden>
				<NavMenu onClick={onClick}/>
			</nav>
			<NavBorder/>
		</Col>
	);
}

export default Nav;