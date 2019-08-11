import React from 'react';
import './Text.css';

const H = ({size, children, className}) => {
	let c;
	if (size === 'xlg') c = <h1 className={className}>{children}</h1>;
	if (size === 'lg') c = <h2>{children}</h2>;
	if (size === 'md') c = <h3>{children}</h3>;
	if (size === 'sm') c = <h4>{children}</h4>;
	if (size === 'xsm') c = <h5>{children}</h5>;
	return (
		<div className={`header-text${className ? ' ' + className : ''}`}>
			{c}
		</div>
	);
};

const P = ({size, children, className}) => (
	<p className={`para ${size ? size + ' ' : ''}${className ? className : ''}`}>{children}</p>
);

const HR = () => <hr/>;

export default H;
export { P, HR };