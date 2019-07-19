import React from 'react';
import './Text.css';

const H = ({size, children}) => {
	
	if (size === 'xlg') return <h1>{children}</h1>;
	if (size === 'lg') return <h2>{children}</h2>;
	if (size === 'md') return <h3>{children}</h3>;
	if (size === 'sm') return <h4>{children}</h4>;
	if (size === 'xsm') return <h5>{children}</h5>;
};

const P = ({size, children}) => (
	<p className={`para ${size ? size : 'md'}`}>{children}</p>
);

export default H;
export { P };