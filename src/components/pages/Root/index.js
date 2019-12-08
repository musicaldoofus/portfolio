import React from 'react';
import { Col } from 'react-grid-system';
import Header, { Body } from '../../atoms/Text';
import Spacer from '../../atoms/Spacer';

const Root = ({match}) => {
	return (
		<div className="page root">
			<Col sm={12} md={6}>
				<Header>Hi there, I'm Michael.</Header>
				<Spacer/>
				<Body size="lg"> I build learning solutions that <span className="accent">empower people</span> and <span className="accent">create impact</span>.</Body>
			</Col>
			<Col sm={12} md={6}>
				
			</Col>
		</div>
	);
}

export default Root;