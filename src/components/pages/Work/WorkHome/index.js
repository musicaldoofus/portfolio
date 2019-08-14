import React from 'react';
import Page from '../../../pages';
import H, { P } from '../../../atoms/Text';
import projects from '../projects';
import './Work.css';

const WorkHome = (props) => {
	console.log('wh', props);
	return (
		<Page colorFocus={props.colorFocus} handleColorFocusChange={props.handleColorFocusChange} className="about">
			<div>
				<H size="xlg">I like to build things.</H>
				<P>Click on a project to learn more.</P>
			</div>
			<div className="projects">
			</div>
		</Page>
	);
}

export default WorkHome;