import React from 'react';
import Page from '../';
import H, { P } from '../../atoms/Text';
import './About.css';

const skills = [
	'JavaScript',
	'HTML',
	'CSS',
	'Accessibility'
];

const About = ({match}) => {
	const skillsList = skills.map(s => <div key={s} className="pill">{s}</div>);
	return (
		<Page>
			<div className="flex-div">
				<div className="photo">
					<img alt="Contact me to learn more" src="https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"/>
					<P>e: <a href="mailto:burns.trainingdesign@gmail.com">burns.trainingdesign@gmail.com</a></P>
				</div>
				<div style={{paddingLeft: '24px'}}>
					<H size="xlg">I like to learn.</H>
					<P>
						Curabitur libero ligula, mollis id feugiat eu, sagittis in ex. Maecenas aliquet felis quis massa fermentum, malesuada convallis felis sodales. Aenean convallis lacus vel odio fringilla varius. Fusce tincidunt mollis dui. Nullam vitae tincidunt purus, et tempor nunc. Aliquam nec leo libero. Sed dui arcu, rhoncus eget magna eget, tincidunt rutrum est.
					</P>
				</div>
			</div>
			<div className="flex-div">
				<div>
					<H size="lg">My skills</H>
					<div className="pill-container">
						{skillsList}
					</div>
				</div>
				<div>
					<H size="lg">My resume</H>
					<P></P>
				</div>
			</div>
		</Page>
	);
}

export default About;