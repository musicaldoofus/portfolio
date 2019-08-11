import React from 'react';
import './Page.css';

const Page = ({children, className}) => {
	return (
		<main id="main" className={`page${className ? ' ' + className : ''}`} role="main">
			<div>
				{children}
			</div>
		</main>
	);
}

export default Page;