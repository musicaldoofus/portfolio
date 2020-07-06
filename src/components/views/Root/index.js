import React, { useState, useRef } from 'react';
import Main from '../../containers/Main';
import AccentBlockExpand from '../../molecules/AccentBlockExpand';
import './Root.css';

const Root = () => {
    const [expandedBlock, setExpandedBlock] = useState(null);
    const [isAccentBlockExpanding, setAccentBlockExpanding] = useState(true);

    const accentBlockBlueRef = useRef(null);
    const accentBlockPinkRef = useRef(null);
    const accentCloseRef = useRef(null);
    const pageRef = useRef(null);

    const handleClickBlock = (color) => {
        if (expandedBlock && color === expandedBlock.color) return;
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

        setAccentBlockExpanding(true);
        setExpandedBlock(expandedBlockParams);

        const nTop = document.querySelector('.nav-links').getBoundingClientRect().top;
        const pLeft = pageRef.current.getBoundingClientRect().left;
        const transformX = 0 - (left - pLeft);
        const transformY = 0 - (top - nTop);
        const style = `transform: translate(${transformX}px, ${transformY}px)`;

        targetRef.current.style = style;

        window.setTimeout(() => {
            const targetRect = targetRef.current.getBoundingClientRect();
            const xAccentOffset = targetRect.right;
            const yAccentOffset = targetRect.top;
    
            console.log(targetRect.left, targetRect.width, targetRect.top, targetRect.height, xAccentOffset, yAccentOffset, `transform: (${xAccentOffset}px, ${yAccentOffset}px)`);
    
                accentCloseRef.current.style = `transform: translate(${xAccentOffset}px, ${yAccentOffset}px)`;
        }, 1000);
    }

    const handleCloseAccentBlock = (color) => {
        const targetRef = color === 'blue' ? accentBlockBlueRef : accentBlockPinkRef;
        targetRef.current.style = 'transform: translate(0, 0);';
        accentCloseRef.current.style = 'opacity: 0';

        window.setTimeout(() => {
            setAccentBlockExpanding(false);
            window.setTimeout(() => {
                setExpandedBlock(undefined);
            }, 300);
        }, 1000);
    }
    
    return (
        <Main>
            <div ref={pageRef} className="page root">
                <header className="header-center">
                    <h1>Hi there, I'm Michael. I design <span ref={accentBlockBlueRef} onClick={() => handleClickBlock('blue')} className={`accent-block blue ${expandedBlock && expandedBlock.color === 'blue' ? 'expanded' : 'initial'}`}>learning</span> for <span ref={accentBlockPinkRef} onClick={() => handleClickBlock('pink')} className={`accent-block pink ${expandedBlock && expandedBlock.color === 'pink' ? 'expanded' : 'initial'}`}>humans</span>.</h1>
                </header>
            </div>
            {expandedBlock && (
                <>
                    <AccentBlockExpand
                        {...expandedBlock}
                        isExpanding={isAccentBlockExpanding}
                    />
                    <button ref={accentCloseRef} className="accent-block-close-btn" onClick={() => handleCloseAccentBlock(expandedBlock.color)}>Close</button>
                </>
            )}
        </Main>
    );
}

export default Root;