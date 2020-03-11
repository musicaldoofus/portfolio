import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../../containers/Main';
import Stub from '../../molecules/Stub';
import './Blog.css';
import { Route } from 'react-router-dom';

const blogPosts = [
    {
        stubId: 'serverless-worth-the-work',
        title: 'It\'s worth the work: saving cash through serverless architecture',
        postedDate: 'March 3, 2020',
        duration: '3 minute',
        description: '',
        markupContent: `
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        `
    },
    {
        stubId: 'serverless-worth-the-work',
        title: 'It\'s worth the work: saving cash through serverless architecture',
        postedDate: 'March 3, 2020',
        duration: '3 minute',
        description: '',
        markupContent: `
            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        `
    },
    {
        stubId: 'serverless-worth-the-work',
        title: 'It\'s worth the work: saving cash through serverless architecture',
        postedDate: 'March 3, 2020',
        duration: '3 minute',
        description: '',
        markupContent: `
            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        `
    },
    {
        stubId: 'serverless-worth-the-work',
        title: 'It\'s worth the work: saving cash through serverless architecture',
        postedDate: 'March 3, 2020',
        duration: '3 minute',
        description: '',
        markupContent: `
            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        `
    },
    {
        stubId: 'serverless-worth-the-work',
        title: 'It\'s worth the work: saving cash through serverless architecture',
        postedDate: 'March 3, 2020',
        duration: '3 minute',
        description: '',
        markupContent: `
            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        `
    },
    {
        stubId: 'serverless-worth-the-work',
        title: 'It\'s worth the work: saving cash through serverless architecture',
        postedDate: 'March 3, 2020',
        duration: '3 minute',
        description: '',
        markupContent: `
            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        `
    },
    {
        stubId: 'serverless-worth-the-work',
        title: 'It\'s worth the work: saving cash through serverless architecture',
        postedDate: 'March 3, 2020',
        duration: '3 minute',
        description: '',
        markupContent: `
            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        `
    },
    {
        stubId: 'serverless-worth-the-work',
        title: 'It\'s worth the work: saving cash through serverless architecture',
        postedDate: 'March 3, 2020',
        duration: '3 minute',
        description: '',
        markupContent: `
            It was my first week. Another part of this anecdote that will hook the reader. The only problem? The hook runs out - and I didn't even know it yet.
        `
    },
];

const BlogRoot = () => {
    return (
        <Main cName="blog">
            <div className="blog-root">
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

const BlogPost = ({match}) => {
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
            <div className="blog-post">
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