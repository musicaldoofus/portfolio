import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import WorkHome from './WorkHome';
import WorkPage from './WorkPage';

const Work = (props) => {
	// console.log('w', props);
	return (
		<Fragment>
			<Route
				exact
				path={props.match.url}
				render={(p) => <WorkHome handleColorFocusChange={props.handleColorFocusChange} {...props} {...p}/>}
			/>
			<Route
				path={`${props.match.url}/:id`}
				render={(p) => <WorkPage handleColorFocusChange={props.handleColorFocusChange} {...props} {...p}/>}
			/>
		</Fragment>
	);
}

export default Work;