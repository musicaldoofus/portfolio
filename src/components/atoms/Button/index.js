import React from 'react';
import { P } from '../Text';
import './Button.css';

const Button = ({id, onClick, label, children, contextStyle}) => {
	return (
		<button className="btn" role="button" id={id} onClick={onClick} contextStyle={contextStyle ? contextStyle : {}}>
			<P>{children ? children : label}</P>
		</button>
	);
}

export default Button;