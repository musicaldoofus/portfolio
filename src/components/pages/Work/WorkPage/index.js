import React from 'react';
import { Redirect } from 'react-router-dom';
import Page from '../../../pages';
import H, { P } from '../../../atoms/Text';
import projects from '../projects';
import './WorkPage.css';

const WorkPage = (props) => {
	const project = projects[props.match.params.id];
	if (!project || !project.hasOwnProperty('id')) return <Redirect to="/work"/>;
	let { title, description, imgSrc, imgSrcAlt } = project;
	return (
		<Page className="work-page">
			<div>
				<H size="xlg">{title}</H>
				<P>{description}</P>
			</div>
			<div className="work-page-img">
				<img alt={imgSrcAlt} src={imgSrc}/>
			</div>
		</Page>
	);
}

export default WorkPage;