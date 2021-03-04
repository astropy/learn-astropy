import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function IndexPage({ location }) {
  return (
    <Layout>
      <SEO location={location} title="Home" />
      <h1>Hello world</h1>
      <p>Lorem ipsum</p>
    </Layout>
  );
}

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
