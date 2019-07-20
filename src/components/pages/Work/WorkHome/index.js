import React from 'react';
import Page from '../../../pages';
import H, { P } from '../../../atoms/Text';
import ProjectCard from '../../../molecules/ProjectCard';
import projects from '../projects';
import './Work.css';

const WorkHome = (props) => {
	const projectList = projects.map(p => <ProjectCard key={p.id} {...p}/>);
	return (
		<Page>
			<div>
				<H size="xlg">Learning should be delightful.</H>
				<P>Click on a project to learn more.</P>
			</div>
			<div className="projects">
				{projectList}
			</div>
		</Page>
	);
}

export default WorkHome;