import React from 'react';
import { Link } from 'react-router-dom';
import H, { P } from '../../atoms/Text';
import './ProjectCard.css';

const ProjectCard = ({id, imgSrc, title, description}) => {
	return (
		<Link className="project-card box-shadow" to={`/work/${id}`}>
			<div className="project-card-img">
				<img alt={`Learn more about the ${title} project`} src={imgSrc}/>
			</div>
			<div className="project-card-title">
				<H size="md">{title}</H>
				<P>{description}</P>
			</div>
		</Link>
	);
}

export default ProjectCard;