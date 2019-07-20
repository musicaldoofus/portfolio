import React from 'react';
import Nav from '../organisms/Nav';
import Footer from '../organisms/Footer';
import './Page.css';

const Page = ({children, className}) => {
	return (
		<div className={`page${className ? ' ' + className : ''}`}>
			<Nav/>
			<main className="fade-in" role="main">
				{children}
			</main>
			<Footer/>
		</div>
	);
}

export default Page;