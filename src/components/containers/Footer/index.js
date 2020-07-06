import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	const [boxShadow, setBoxShadow] = useState();

    const location = useLocation();

	useEffect(() => {
		if (location && location.pathname !== '/') setBoxShadow(true);
		else setBoxShadow(false);
	}, [location]);

	return (
		<footer id="footer" role="contentinfo" className={`${boxShadow ? 'box-shadow' : 'initial'}`}>
			<span>Copryight 2020 Michael Burns</span>
		</footer>
	);
};

export default Footer;