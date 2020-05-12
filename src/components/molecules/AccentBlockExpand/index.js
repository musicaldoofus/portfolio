import React, { useState, useEffect } from 'react';

const AccentBlockExpand = ({color, top, left, width, height, isExpanding}) => {
    const [isExpanded, setExpanded] = useState(false);

    useEffect(() => {
        setExpanded(true);
    }, []);

    const initStyle = {
        left,
        top,
        width,
        height,
        opacity: 1
    };
    const expandedStyle = {
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
    };

    return (
        <>
            <span
                className={`accent-block-expanded ${color}`}
                style={isExpanded && isExpanding ? expandedStyle : initStyle}
            ></span>
        </>
    );
}

export default AccentBlockExpand;