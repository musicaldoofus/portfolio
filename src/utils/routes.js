import React from 'react';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Work from '../components/pages/Work';

const routes = [
	{
		path: '/work',
		exact: null,
		render: (props) => <Work {...props}/>
	},
	{
		path: '/about',
		exact: true,
		render: (props) => <About {...props}/>
	},
	{
		path: '',
		exact: true,
		render: (props) => <Home {...props}/>
	},
	{
		path: '/',
		exact: true,
		render: (props) => <Home {...props}/>
	}
];

export default routes;