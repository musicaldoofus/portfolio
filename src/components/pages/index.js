import React from 'react';
import './Page.css';

const Page = ({className, children}) => {
	return (
		<main id="main" role="main">
			<div className={`page${className ? ' ' + className : ''}`}>
				<div>{children}</div>
			</div>
		</main>
	);
}

export default Page;