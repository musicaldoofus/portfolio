import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import WorkHome from './WorkHome';
import WorkPage from './WorkPage';

const Work = (props) => {
	return (
		<Fragment>
			<Route
				exact
				path={props.match.url}
				component={WorkHome}
			/>
			<Route
				path={`${props.match.url}/:id`}
				component={WorkPage}
			/>
		</Fragment>
	);
}

export default Work;