import React, { Fragment } from 'react';
import { Col, Visible, Hidden } from 'react-grid-system';
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

const Nav = () => {
	return (
		<Col sm={2}>
			<nav className="nav">
				<div className="nav-brand">MB</div>
			</nav>
			<NavBorder/>
		</Col>
	);
}

export default Nav;