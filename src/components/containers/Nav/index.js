import React from 'react';
import { Link } from 'react-router-dom';
import navLinks from './navLinks';
import './Nav.css';

const Nav = () => {
	return (
		<nav>
			<div className="nav-links">
				<ul>
					{navLinks.map(({to, label}) => (
						<li key={to}>
							<Link to={to} aria-current="page">{label}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Nav;