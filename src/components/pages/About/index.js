import React from 'react';
import Page from '../';
import H, { P, HR } from '../../atoms/Text';
import Button from '../../atoms/Button';
import './About.css';
import profilePic from '../../../media/svg/mb_portrait_flat_monochrome.svg';

const skills = [
	'JavaScript',
	'HTML',
	'CSS',
	'Accessibility',
	'Learning Experience Design',
	'Powerpoint',
	'Storyline',
	'Adobe CC'
];

const About = ({match}) => {
	const skillsList = skills.map(s => <div key={s} className="pill"><span>{s}</span></div>);
	const emailUrl = 'mailto:burns.trainingdesign@gmail.com';
	return (
		<Page>
			<div className="flex-div">
				<div className="photo">
					<img alt="Contact me to learn more" src={profilePic}/>
					<Button style={{margin: '24px auto 0 auto'}} onClick={() => window.open(emailUrl)}>Let's get in touch.</Button>
				</div>
				<div>
					<H size="xlg">I like to learn.</H>
					<P>
						Curabitur libero ligula, mollis id feugiat eu, sagittis in ex. Maecenas aliquet felis quis massa fermentum, malesuada convallis felis sodales. Aenean convallis lacus vel odio fringilla varius. Fusce tincidunt mollis dui. Nullam vitae tincidunt purus, et tempor nunc. Aliquam nec leo libero. Sed dui arcu, rhoncus eget magna eget, tincidunt rutrum est.
					</P>
				</div>
			</div>
			<div className="flex-div" style={{paddingTop: '80px', alignItems: 'flex-start'}}>
				<div style={{marginTop: 0}}>
					<H size="lg">My skills</H>
					<HR/>
					<div className="pill-container">
						{skillsList}
					</div>
				</div>
				<div style={{marginTop: 0}}>
					<H size="lg">My resume</H>
					<HR/>
					<div style={{display: 'flex'}}>
						<Button id="download-resume-pdf" style={{flexGrow: 1}} onClick={() => console.log('downloaded')}>View and download PDF</Button>
						<Button id="download-resume-text-only" onClick={() => console.log('downloaded')}>Download Text only</Button>
					</div>
				</div>
			</div>
		</Page>
	);
}

export default About;