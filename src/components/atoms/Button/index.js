import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = React.forwardRef(({id, isLink, to, onClick, label, children, style, className}, ref) => {
	if (isLink) return (
		<Link ref={ref} className={`btn${className ? ' ' + className : ''}`} to={to} style={style ? style : {}}>
			<div>{children ? children : label}</div>
		</Link>
	);
	return (
		<button ref={ref} className={`btn${className ? ' ' + className : ''}`} id={id} onClick={onClick} style={style ? style : {}}>
			{children ? children : label}
		</button>
	);
});

export default Button;