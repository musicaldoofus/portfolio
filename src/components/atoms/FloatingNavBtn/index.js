import React from 'react';
import { Link } from 'react-router-dom';
import './FloatingNavBtn.css';

const FloatingNavBtn = React.forwardRef((props, ref) => {
	return (
		<Link ref={ref} style={props.style ? props.style : {}} className={`floating-nav-btn ${props.className}`} to={props.to}>
			<span>
				{props.label}
			</span>
		</Link>
	);
})

export default FloatingNavBtn;