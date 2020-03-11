import React from 'react';
import { Link } from 'react-router-dom';
import './Stub.css';

const Stub = ({stubId, title, postedDate, duration, description}) => {
    return (
        <div className="stub">
            <Link to={`/blog/${stubId}`}>
                <h3><b>{title}</b></h3>
                <p><em>Posted: {postedDate}</em></p>
                <p><em>Duration: {duration} read</em></p>
                <p>{description}</p>
            </Link>
        </div>
    );
}

export default Stub;