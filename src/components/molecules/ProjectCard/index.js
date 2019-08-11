import React from 'react';
import { Link } from 'react-router-dom';
import H, { P } from '../../atoms/Text';
import Button from '../../atoms/Button';
import './ProjectCard.css';

const ProjectCard = ({id, to, imgSrc, title, description}) => {
	return (
		<Link className="project-card box-shadow" to={`/work/${id}`}>
			<div className="project-card-img">
				<img alt={`Learn more about the ${title} project`} src={imgSrc}/>
			</div>
			<div className="project-card-title">
				<H size="md">{title}</H>
				<P>{description}</P>
			</div>
			<div id="call-to-action">
				<Button isLink={true} to={to}>See more</Button>
			</div>
		</Link>
	);
}

export default ProjectCard;