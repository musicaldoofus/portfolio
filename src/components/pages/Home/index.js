import React from 'react';
import Page from '../';
import H, { P } from '../../atoms/Text';
import './Home.css';

const Home = () => {
	return (
		<Page className="home">
			<div className="svg-animation-container">
			
			</div>
			<div>
				<H size="xlg">Let's work together.</H>
				<P>I'm a learning design professional with blah blah who cares, am I right</P>
			</div>
		</Page>
	);
}

export default Home;