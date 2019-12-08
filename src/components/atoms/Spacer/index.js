import React from 'react';
import './Spacer.css';

const Spacer = ({size}) => {
    const className = 'spacer'.concat(size === 'lg' ? ' lg' : '');
    return (
        <div className={className}></div>
    );
}

export default Spacer;