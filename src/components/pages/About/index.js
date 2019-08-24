import React from 'react';
import Page from '../';
import H from '../../atoms/Text';
// import Button from '../../atoms/Button';
import './About.css';

const About = (props) => {
	return (
		<Page colorFocus={props.colorFocus} handleColorFocusChange={props.handleColorFocusChange} className="about">
			<div>
				<H size="xlg">
					About me
				</H>
			</div>
		</Page>
	);
}

export default About;