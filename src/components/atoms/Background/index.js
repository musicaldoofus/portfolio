import React from 'react';
import colors from '../../../utils/colors';
import './Background.css';

const Background = ({colorFocus, prevColorFocus}) => (
	<div className="background-container">
		{colors.map(color => (
			<div className={`background ${color.label}${colorFocus.label === color.label ? ' active' : ''}`}></div>
		))}
		<div className={`background-prev-color ${prevColorFocus.label}`}></div>
	</div>
);

export default Background;