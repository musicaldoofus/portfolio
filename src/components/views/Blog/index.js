import React from 'react';
import { Route } from 'react-router-dom';
import BlogRoot from './BlogRoot';
import BlogPost from './BlogPost';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <Route
                exact
                path="/blog"
                component={BlogRoot}
            />
            <Route
                path={`/blog/:stubId`}
                component={BlogPost}
            />
        </>
    );
}

export default Blog;