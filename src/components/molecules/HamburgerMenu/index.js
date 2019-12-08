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

    return (
        <Fragment>
            <div className={`hamburger-menu-panel${isMounted ? ' mounted' : ''}`}>
                <Container>
                    <Row>
                        <Col>
                            <div>Panel</div>
                            <div className="hamburger-menu-panel-close-btn" onClick={handleClose}>Close</div>
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