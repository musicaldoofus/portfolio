import React from 'react';
import './Text.css';

const Header = ({size, children, className}) => {
	/*
	let c;
	if (size === 'xlg') c = <h1 className={className}>{children}</h1>;
	if (size === 'lg') c = <h2>{children}</h2>;
	if (size === 'md') c = <h3>{children}</h3>;
	if (size === 'sm') c = <h4>{children}</h4>;
	if (size === 'xsm') c = <h5>{children}</h5>;
	*/
	return (
		<div className="text-container">
			<header>{children}</header>
		</div>
	);
};

const Body = ({size, children, className}) => {
	return (
		<div className="text-container">
			{size === 'lg' ?
				<h3>{children}</h3>
				: <p>{children}</p>
			}
		</div>
	);
}

const HR = () => <hr/>;

export default Header;
export { Body, HR };