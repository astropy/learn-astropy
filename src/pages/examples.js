import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function ExamplesPage({ location }) {
  return (
    <Layout>
      <SEO location={location} title="Examples" />
      <h1>Examples</h1>
      <p>
        Examples are stand-alone code snippets that live in the astropy
        documentation that demonstrate a specific functionality within a
        package.
      </p>
    </Layout>
  );
}

ExamplesPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
