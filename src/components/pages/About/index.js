import React from 'react';
import Page from '../';
import H from '../../atoms/Text';
// import Button from '../../atoms/Button';
import './About.css';

const About = (props) => {
	console.log('p', props.colorFocus);
	return (
		<Page colorFocus={props.colorFocus} handleColorFocusChange={props.handleColorFocusChange} className="about">
			<div>
				<H size="xlg">
					About me
				</H>
				<H size="lg">
					I like to work with people.
				</H>
				<H size="md">
					
				</H>
			</div>
		</Page>
	);
}

export default About;