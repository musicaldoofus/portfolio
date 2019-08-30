import React from 'react';
import Page from '../';
import H from '../../atoms/Text';
import './About.css';

const SimpleCard = (props) => {
	console.log('sc', props);
	return (
		<div className={`simple-card${props.label ? ' focus' : ''}`}>
			{props.label && <H size="md"><b>{props.label}</b></H>}
			{props.img && <img src={props.imgSrc} alt=""/>}
		</div>
	);
}

const cardRows = [
	[
		{
			label: 'I believe'
		},
		{
			imgSrc: ''
		},
		{
			imgSrc: ''
		}
	],
	[
		{
			imgSrc: ''
		},
		{
			label: 'I design'
		},
		{
			imgSrc: ''
		}
	],
	[
		{
			imgSrc: ''
		},
		{
			imgSrc: ''
		},
		{
			label: 'I build'
		}
	]
]

const About = (props) => {
	const rows = cardRows.map((row, i) => {
		return (
			<div className="smart-row">
				{row.map((c, i) => <SimpleCard key={i} {...c}/>)}
			</div>
		);
	});
	return (
		<Page colorFocus={props.colorFocus} handleColorFocusChange={props.handleColorFocusChange} className="about">
			<div style={{display: 'grid', gridTemplateRows: 'auto 1fr', height: '100%'}}>
				<div>
					<H size="xlg">
						About me
					</H>
					<H size="lg">
						Let's get to know each other.
					</H>
				</div>
				<div className="smart-grid">
					{rows}
				</div>
			</div>
		</Page>
	);
}

export default About;