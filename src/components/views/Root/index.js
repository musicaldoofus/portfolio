import React, { useState, useEffect, useRef } from 'react';
import Main from '../../containers/Main';
import './Root.css';

const AccentBlockExpand = ({color, top, left, width, height, handleClose}) => {
    const [isExpanded, setExpanded] = useState(false);

    useEffect(() => {
        setExpanded(true);
    }, []);

    const handleClickClose = () => {
        setExpanded(false);
        handleClose();
    }

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

    //set close btn attributes
    //get main.boundingRect
    //set style
    const closeBtnStyle = {};

    return (
        <>
            <span
                className={`accent-block-expanded ${color}`}
                style={isExpanded ? expandedStyle : initStyle}
            ></span>
            <button onClick={handleClickClose} style={closeBtnStyle}>&times;</button>
        </>
    );
}

const Root = () => {
    const [expandedBlock, setExpandedBlock] = useState(null);
    const accentBlockBlueRef = useRef(null);
    const accentBlockPinkRef = useRef(null);
    const pageRef = useRef(null);

    const handleClickBlock = (color) => {
        const targetRef = color === 'blue' ? accentBlockBlueRef : accentBlockPinkRef;
        const accentRect = targetRef.current.getBoundingClientRect();
        const {width, height, top, left} = accentRect;
        const expandedBlockParams = {
            color,
            width,
            height,
            top,
            left
        };

        setExpandedBlock(expandedBlockParams);

        const nTop = document.querySelector('.nav-links').getBoundingClientRect().top;
        const pLeft = pageRef.current.getBoundingClientRect().left;
        const transformX = 0 - (left - pLeft);
        const transformY = 0 - (top - nTop);
        const style = `transform: translate(${transformX}px, ${transformY}px)`;

        targetRef.current.style = style;
    }

    const handleCloseAccentBlock = () => {
        setExpandedBlock(undefined);
    }
    
    return (
        <Main>
            <div ref={pageRef} className="page root">
                <header className="header-center">
                    <h1>Hi there, I'm Michael. I design <span ref={accentBlockBlueRef} onClick={() => handleClickBlock('blue')} className={`accent-block blue ${expandedBlock && expandedBlock.color === 'blue' ? 'expanded' : 'initial'}`}>learning</span> for <span ref={accentBlockPinkRef} onClick={() => handleClickBlock('pink')} className={`accent-block pink ${expandedBlock && expandedBlock.color === 'pink' ? 'expanded' : 'initial'}`}>humans</span>.</h1>
                </header>
            </div>
            {expandedBlock && (
                <AccentBlockExpand
                    {...expandedBlock}
                    handleClose={handleCloseAccentBlock}
                />
            )}
        </Main>
    );
}

export default Root;