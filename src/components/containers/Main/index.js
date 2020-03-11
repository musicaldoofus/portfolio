import React from 'react';
import './Main.css';

const Main = ({children, cName}) => {
    return (
        <main className={cName ? cName : ''}>
            {children}
        </main>
    );
}

export default Main;