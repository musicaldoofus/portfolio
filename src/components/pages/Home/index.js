import React from 'react';
import Page from '../';
import H from '../../atoms/Text';
import './Home.css';

const Home = (props) => {
	// console.log('h', props);
	return (
		<Page className="home">
			<div>
				<H size="xlg">Michael Burns</H>
				<H size="md">Learning Experience Designer</H>
			</div>
		</Page>
	);
}

export default Home;