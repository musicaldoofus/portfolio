import React from 'react';
import Page from '../';
import H from '../../atoms/Text';
import './About.css';

const About = (props) => {
	return (
		<Page colorFocus={props.colorFocus} handleColorFocusChange={props.handleColorFocusChange} className="about">
			<div style={{display: 'grid', gridTemplateRows: 'auto 1fr', height: '100%'}}>
				<div>
					<H size="xlg">
						About me
					</H>
					<H size="lg">
						Let's get to know each other.
					</H>
				</div>
			</div>
		</Page>
	);
}

export default About;