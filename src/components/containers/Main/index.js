import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Main.css';

const Main = ({children, cName}) => {
    const [isActive, setActive] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setActive(true);
    }, [location]);

    return (
        <main className={`${cName ? cName : ''} ${isActive ? 'active' : 'initial'}`}>
            {children}
        </main>
    );
}

export default Main;