import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from '../styles/globalStyles';
import Header from './header';

/*
 * The Layout component wraps the contents of every page.
 */
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
