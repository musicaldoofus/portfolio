import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import navBrand from '../../../media/svg/nav-brand.svg';
import './Nav.css';

const NavBorder = () => {
	return (
		<Fragment>
			<Hidden xs>
				<div className="nav-border nav-border-right">
					<div></div>
					<div></div>
				</div>
			</Hidden>
			<Visible xs>
				<div className="nav-border nav-border-bottom">
					<div></div>
					<div></div>
				</div>
			</Visible>
		</Fragment>
	);
}

const NavBrand = () => {
	return (
		<Row style={{width: '100%'}}>
			<Col>
				<div className="nav-brand">
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

const NavHamburgerMenu = () => {
	useEffect(() => setMounted(true), []);

	const [showMenu, setShowMenu] = useState(false);
	const [isMounted, setMounted] = useState(false);

	const handleShowToggle = () => setShowMenu(!showMenu);

	return (
		<div className="nav-menu-hamburger">
			<div className={`nav-menu-hamburger-lines${isMounted ? ' mounted' : ''}`} onClick={handleShowToggle}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			{showMenu && (
				<Fragment>
					<div className="nav-menu-hamburger-panel">
						<div className="nav-menu-hamburger-panel-close">
						</div>
					</div>
					<div className="nav-menu-hamburger-panel-bg"></div>
				</Fragment>
			)}
		</div>
	);
}

const NavMenu = () => {
	return (
		<Fragment>
			<Hidden xs>
				<NavMenuExpanded/>
			</Hidden>
			<Visible xs>
				<NavHamburgerMenu/>
			</Visible>
		</Fragment>
	);
}

const Nav = () => {
	return (
		<Col sm={2}>
			<nav className="nav">
				<NavBrand/>
				<NavMenu/>
			</nav>
			<NavBorder/>
		</Col>
	);
}

export default Nav;