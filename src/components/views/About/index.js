import React, { useState, useEffect } from 'react';
import Main from '../../containers/Main';
import AboutCard from '../../molecules/AboutCard';
import aboutCards from './aboutCards';
import './About.css';

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