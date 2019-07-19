import React from 'react';
import Nav from '../organisms/Nav';
import './Page.css';

const Page = ({children, className}) => {
	return (
		<div className={`page ${className}`}>
			<Nav/>
			<main role="main">
				{children}
			</main>
		</div>
	);
}

export default Page;