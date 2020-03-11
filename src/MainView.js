import React from 'react';
import Router from './Router';
import { Row, Col } from 'react-grid-system';

const MainView = () => {
	const fullHeight = {
		height: '100%'
	};
	return (
		<Col style={{padding: '2em'}} sm={10}>
			<Row style={fullHeight}>
				<Router/>
			</Row>
		</Col>
	);
}

export default MainView;