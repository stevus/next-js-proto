import React from 'react';
import Link from 'next/link';
import styled, { hydrate, keyframes, css, injectGlobal } from 'react-emotion';
import LayoutSwitch from '../components/LayoutSwitch';
import Container from '../components/Container';
import Hero from '../components/Hero';
import PostExcerpt from '../components/PostExcerpt';
import { theme } from '../site.config';
import { posts } from '../utils/exportPosts';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

injectGlobal`
  *,
  *:after,
  *::before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }
  html, body {
    padding: 0;
    margin: 0;
    min-height: 100%;
  }
  a {
    color: ${theme.colors.primary};
	}
`;

const Home = () => (
  <LayoutSwitch
    title="Static site built with MDX and Next.js"
    description={
      <p className="description">
        This is a description
      </p>
    }
    layout="hero"
  >
    <Container>
      {posts
        .sort((a, b) => b.publishDate - a.publishDate)
        .map(post => <PostExcerpt key={post.url} {...post} />)}
    </Container>
  </LayoutSwitch>
);

export default Home;
