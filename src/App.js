import React, { useState, useEffect } from 'react';
import Router from './Router';
import './App.css';

const App = () => {
	const [showIntroAnim, setShowIntroAnim] = useState(true);

	const animationDuration = 1500;

	useEffect(() => {
		//window.scrollTo(0, 0);

		window.setTimeout(() => {
			setShowIntroAnim(false);
		}, animationDuration);
	}, []);

	return (
		<div className="app">
			{showIntroAnim && (
				<div className="intro-line-container">
					<div className="intro-line"></div>
				</div>
			)}
			<Router/>
		</div>
	);
}

export default App;