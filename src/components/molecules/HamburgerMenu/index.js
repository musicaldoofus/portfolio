import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './HamburgerMenu.css';

const HamburgerMenu = ({onClick}) => {
    useEffect(() => setMounted(true),[]);

    const [isMounted, setMounted] = useState(false);

    const handleClose = () => {
        setMounted(false);
        window.setTimeout(onClick, 300);
    }

    const fullHeight = {
        height: '100%'
    };
    return (
        <Fragment>
            <div className={`hamburger-menu-panel${isMounted ? ' mounted' : ''}`}>
                <Container style={fullHeight}>
                    <Row style={fullHeight}>
                        <Col>
                            <div className="hamburger-menu-panel-body">Panel</div>
                            <button className={`hamburger-menu-panel-close-btn${isMounted ? ' mounted' : ''}`} onClick={handleClose}>
                                <div></div>
                                <div></div>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={`hamburger-menu-overlay${isMounted ? ' mounted' : ''}`}>
            </div>
        </Fragment>
    );
}

export default HamburgerMenu;