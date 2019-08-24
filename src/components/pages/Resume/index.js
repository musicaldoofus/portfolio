import React from 'react';
import Page from '../';
import H from '../../atoms/Text';
import './Resume.css';

const Resume = (props) => {
	return (
		<Page colorFocus={props.colorFocus} handleColorFocusChange={props.handleColorFocusChange} className="about">
			<div>
				<H size="xlg">
					My experience
				</H>
			</div>
		</Page>
	);
}

export default Resume;