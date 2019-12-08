import React from 'react';
import { Col, Hidden } from 'react-grid-system';
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
			<Hidden sm>
				<Col md={6}>
					Graphic
				</Col>
			</Hidden>
			<Spacer/>
			<Spacer/>
			<Spacer/>
			<Spacer/>
			<Spacer/>
			<Spacer/>
			<Spacer/>
		</div>
	);
}

export default Root;