import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const navLinks = [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/about',
		label: 'About'
	},
	{
		to: '/work',
		label: 'Work'
	},
	{
		to: '/blog',
		label: 'Blog'
	},
	{
		to: '/contact',
		label: 'Contact'
	}
];

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