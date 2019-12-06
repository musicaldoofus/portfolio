import React from 'react';
import './Body.css';

const Body = ({size, text, children}) => {
    const bodyText = text ? text : children;
    return (
        <div className="body-text">
            {size === 'lg' ?
                <h3>{bodyText}</h3>
                : <p>{bodyText}</p>
            }
        </div>
    );
}

export default Body;