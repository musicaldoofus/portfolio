import React, { useState, useEffect } from 'react';
import Main from '../../../containers/Main';
import Stub from '../../../molecules/Stub';
import blogPosts from '../blogPosts';

const BlogRoot = () => {
    const [yOffset, setOffset] = useState(undefined);

    useEffect(() => {
        setOffset(document.querySelector('.nav-links').getBoundingClientRect().y); //setting within useEffect to ensure component is mounted and can access DOM
    }, []);

    return (
        <Main cName="blog">
            <div className="page blog blog-root" style={{paddingTop: `${yOffset}px`}}>
                <div>
                    <header>
                        <h1> / Blog</h1>
                    </header>
                    <p>
                        Professional and personal thoughts.
                    </p>
                </div>
                <div className="stubs-list">
                    {blogPosts.map((s) => <Stub key={s.stubId} {...s}/>)}
                </div>
            </div>
        </Main>
    );
}

export default BlogRoot;