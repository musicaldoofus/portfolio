import React from 'react';
import Page from '../../../pages';
import H, { P } from '../../../atoms/Text';
import './Work.css';

const WorkHome = (props) => {
	return (
		<Page className="about">
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