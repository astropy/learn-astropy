import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function TutorialsPage({ location }) {
  return (
    <Layout>
      <SEO location={location} title="Tutorials" />
      <h1>Tutorials</h1>
      <p>
        Tutorials are step-by-step cookbooks for common activities that
        incorporate several packages. They are more specific and less conceptual
        than Guides but more extended than Examples.
      </p>
    </Layout>
  );
}

TutorialsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
