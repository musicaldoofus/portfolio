import React from 'react';
import Main from '../../containers/Main';
import './Root.css';

const Root = () => {
    return (
        <Main>
            <div className="page-root">
                <header className="header-center">
                    <h1>Hi there, I'm Michael. I design <span className="accent-block blue">learning</span> for <span className="accent-block pink">humans.</span></h1>
                </header>
            </div>
        </Main>
    );
}

export default Root;