import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GlobalStyles from '../styles/globalStyles';
import Header from './header';

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 60em;
  padding: 0 10px 0 10px;
`;

/*
 * The Layout component wraps the contents of every page.
 */
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
