import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from '../styles/globalStyles';

/*
 * The Layout component wraps the contents of every page.
 */
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
