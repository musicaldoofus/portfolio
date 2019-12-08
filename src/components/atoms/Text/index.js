import React, { useEffect, useState } from 'react';
import './Text.css';

const TextContainer = ({type, size, children}) => {
	useEffect(() => setMounted(true), []);
	const [isMounted, setMounted] = useState(false);

	const childContainer = type === 'header' ? <header>{children}</header> : (
		size === 'lg' ? <h3>{children}</h3> : <p>{children}</p>
	);
	return (
		<div className={`text-container${isMounted ? ' mounted' : ''}`}>
			{childContainer}
		</div>
	);
}

const Header = ({children}) => <TextContainer type="header" children={children}/>;
const Body = ({children, size}) => <TextContainer type="body" size={size} children={children}/>;
const HR = () => <hr/>;

export default Header;
export { Body, HR };