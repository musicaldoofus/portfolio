import React from 'react';

const AboutCard = ({header, paragraph}) => {
    return (
        <div className="about-card stub">
            <h2>{header}</h2>
            <p>{paragraph}</p>
        </div>
    );
}

export default AboutCard;