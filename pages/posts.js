import React from 'react';
import { withRouter } from 'next/router';
import _ from 'lodash';
import LayoutSwitch from '../components/LayoutSwitch';
import Hero from '../components/Hero';
import { posts } from '../utils/exportPosts';

const Post = withRouter(({ router: { query: { url } } }) => {
  const { title, excerpt, Component } = _.find(posts, { url: url });
  return (
    <LayoutSwitch
      title={title}
      description={<p className="description">{excerpt}</p>}
      layout="hero"
    >
      <>
        <Component />
      </>
    </LayoutSwitch>
  );
  return null;
});

export default Post;
