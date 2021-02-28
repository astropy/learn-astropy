import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../components/seo';

export default function IndexPage({ location }) {
  return (
    <>
      <SEO location={location} title="Home" />
      <h1>Hello world</h1>
      <p>Lorem ipsum</p>
    </>
  );
}

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
