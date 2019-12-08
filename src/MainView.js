import React from 'react';
import Router from './Router';
import { Row, Col } from 'react-grid-system';

const MainView = () => {
	return (
		<Col style={{padding: '2em', height: '100%', overflowY: 'visible'}} sm={10}>
			<Row>
				<Router/>
			</Row>
		</Col>
	);
}

export default MainView;