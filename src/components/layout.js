import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Fonts from fontsource
// https://github.com/fontsource/fontsource
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/400-italic.css';
import '@fontsource/source-sans-pro/700.css';

import GlobalStyles from '../styles/globalStyles';
import Header from './header';
import Footer from './footer';

/*
 * Layout wrapper div.
 *
 * Its main job is to provide a "sticky footer" so that the Footer component
 * stays at the bottom of the page and the Header/MainContent components
 * take up any excess space. See
 * https://css-tricks.com/couple-takes-sticky-footer/
 */
const StyledLayout = styled.div`
  /* Flexbox for the sticky footer */
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .upper-container {
    flex: 1 0 auto;
  }
  .sticky-footer-container {
    flex-shrink: 0;
  }
`;

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: var(--astropy-content-width);
  padding: 0 var(--astropy-size-s);
`;

/*
 * The Layout component wraps the contents of every page.
 */
export default function Layout({ children }) {
  return (
    <StyledLayout>
      <GlobalStyles />
      <div className="upper-container">
        <Header />
        <StyledMain>{children}</StyledMain>
      </div>
      <div className="sticky-footer-container">
        <Footer />
      </div>
    </StyledLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
