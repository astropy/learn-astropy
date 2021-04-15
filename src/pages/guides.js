import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function GuidesPage({ location }) {
  return (
    <Layout>
      <SEO location={location} title="Guides" />
      <h1>Guides</h1>
      <p>
        Guides are comprehensive, conceptually-focused documents providing
        stand-alone introductions to core packages in addition to the underlying
        astronomical concepts.
      </p>
    </Layout>
  );
}

GuidesPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
