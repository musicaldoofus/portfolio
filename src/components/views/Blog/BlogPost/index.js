import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../../containers/Main';
import blogPosts from '../blogPosts';

const BlogPost = ({match}) => {

    const [yOffset, setOffset] = useState(undefined);

    useEffect(() => {
        setOffset(document.querySelector('.nav-links').getBoundingClientRect().y); //setting within useEffect to ensure component is mounted and can access DOM
    }, []);


    const post = blogPosts.filter(b => b.stubId === match.params.stubId)[0];

    if (!match.params || !match.params.hasOwnProperty('stubId') || !post) return (
        <Main cName="blog">
            <div>
                <h2>Oops.</h2>
                <p>Looks like that post doesn't exist.</p>
            </div>
        </Main>
    );

    const {title, postedDate, duration, description, markupContent} = post;

    return (
        <Main cName="blog">
            <div className="blog-post" style={{paddingTop: `${yOffset}px`}}>
                <div>
                    <Link to="/blog">
                        <h1 className="header-small muted">/ Blog</h1>
                    </Link>
                    <header>
                        <h2>{title}</h2>
                    </header>
                    <div>
                        <p><em>Posted: {postedDate}</em></p>
                        <p><em>Duration: {duration} read</em></p>
                        {description && <p>{description}</p>}
                    </div>
                </div>
                <div className="blog-content">
                    {markupContent}
                </div>
            </div>
        </Main>
    )
}

export default BlogPost;