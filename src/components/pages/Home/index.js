import React from 'react';
import Page from '../';
import H from '../../atoms/Text';
import Button from '../../atoms/Button';
import './Home.css';

const Home = (props) => {
	console.log('h', props);
	return (
		<Page colorFocus={props.colorFocus} handleColorFocusChange={props.handleColorFocusChange} className="home">
			<H size="xlg">
				Hi there, my name's Michael.
			</H>
			<H size="lg" className={`accent-${props.colorFocus.label}`}>
				I'm passionate about building learning experiences that create impact.
			</H>
			<Button className={`accent-${props.colorFocus.label}-dk stretch`}>Let's work together.</Button>
		</Page>
	);
}

export default Home;