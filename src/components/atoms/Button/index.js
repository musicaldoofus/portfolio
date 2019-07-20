import React from 'react';
import './Button.css';

const Button = ({id, onClick, label, children, style}) => {
	return (
		<button className="btn" id={id} onClick={onClick} style={style ? style : {}}>
			{children ? children : label}
		</button>
	);
}

export default Button;