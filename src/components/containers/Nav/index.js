import React from 'react';
import { Link } from 'react-router-dom';

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
							<Link to={to}>{label}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Nav;