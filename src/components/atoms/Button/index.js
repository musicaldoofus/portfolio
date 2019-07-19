import React from 'react';
import './Button.css';

const Button = ({id, onClick, label, children}) => {
	return (
		<button className="btn" role="button" id={id} onClick={onClick}>
			{children ? children : label}
		</button>
	);
}

export default Button;