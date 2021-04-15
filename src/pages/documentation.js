import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function DocumentationPage({ location }) {
  return (
    <Layout>
      <SEO location={location} title="Documentation" />
      <h1>Documentation</h1>
      <p>
        Documentation is the complete description of a package with all
        requisite details, including usage, dependencies, and examples.
      </p>
    </Layout>
  );
}

DocumentationPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
