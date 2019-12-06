import React from 'react';
import { Col, Visible, Hidden } from 'react-grid-system';
import './Nav.css';

const Nav = () => {
	return (
		<Col sm={2} style={{backgroundColor: 'var(--black-one)'}}>
			<nav className="nav">
				<div className="nav-brand">MB</div>
			</nav>
			<Hidden xs>
				<div className="nav-border nav-border-right"></div>
			</Hidden>
			<Visible xs>
				<div className="nav-border nav-border-bottom"></div>
			</Visible>
		</Col>
	);
}

export default Nav;