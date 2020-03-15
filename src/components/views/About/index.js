import React, { useState, useEffect } from 'react';
import Main from '../../containers/Main';
import './About.css';

const aboutCards = [
    {
        header: 'I recognize the power of behavior change.',
        paragraph: ''
    },
    {
        header: 'Solving puzzles is my passion.',
        paragraph: ''
    },
    {
        header: 'I deliver quality experiences that delight users and create business impact.',
        paragraph: ''
    },
    {
        header: 'I\'m media- and format-agnostic. Users don\'t have time for my technical stuff.',
        paragraph: ''
    },
    {
        header: 'I [consult -> design -> develop -> iterate -> evaluate -> implement -> repeat]',
        paragraph: ''
    },
    {
        header: '',
        paragraph: ''
    }
];

const AboutCard = ({header, paragraph}) => {
    return (
        <div className="about-card stub">
            <h2>{header}</h2>
            <p>{paragraph}</p>
        </div>
    );
}

const About = () => {
    const [yOffset, setOffset] = useState(undefined);

    useEffect(() => {
        setOffset(document.querySelector('.nav-links').getBoundingClientRect().y); //setting within useEffect to ensure component is mounted and can access DOM
    }, []);

    return (
        <Main>
            <div className="page about" style={{paddingTop: `${yOffset}px`}}>
                <div>
                    <header>
                        <h1>/ About</h1>
                    </header>
                    <p>
                        Let's get to know each other.
                    </p>
                </div>
                {aboutCards.map(c => <AboutCard {...c}/>)}
            </div>
        </Main>
    );
}

export default About;