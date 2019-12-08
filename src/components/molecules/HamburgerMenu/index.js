import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './HamburgerMenu.css';

const HamburgerMenu = ({onClick}) => {
    return (
        <Fragment>
            <div className="hamburger-menu-panel">
                <Container>
                    <Row>
                        <Col>
                            <div>Panel</div>
                            <div className="hamburger-menu-panel-close-btn" onClick={onClick}>Close</div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="hamburger-menu-overlay">
            </div>
        </Fragment>
    );
}

export default HamburgerMenu;