import LayoutSwitch from '../components/LayoutSwitch';
import React from 'react';
import { withRouter } from 'next/router';
import _ from 'lodash';
import Head from '../components/Head';
import { landingPages } from '../utils/exportPosts';

const LandingPage = withRouter(({ router: { query: { url } } }) => {
  const { title, Component } = _.find(landingPages, { url: url });
  return (
    <LayoutSwitch title="Landing Page">
      <Head title={title} />
      <Component />
    </LayoutSwitch>
  );
  return null;
});

export default LandingPage;
