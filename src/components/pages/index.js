import React from 'react';
import './Page.css';

const Page = ({className, children}) => {
	return (
		<div className="page">
			<div>{children}</div>
		</div>
	);
}

export default Page;