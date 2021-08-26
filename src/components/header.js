import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from '../../static/learn-astropy-logo.png';

const HeaderContainer = styled.header`
  width: 100%;
  padding: var(--astropy-size-s) var(--astropy-size-m);
  margin: 0;
  background-color: var(--astropy-nav-header-color);
  color: var(--astropy-nav-header-text-color);

  .learn-astropy-logo {
    width: 12rem;
  }
`;

/*
 * Header component that includes the logo, search bar, and navigation tabs.
 */
export default function NavHeader() {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <img
            src={logo}
            alt="Learn Astropy Homepage"
            className="learn-astropy-logo"
          />
        </Link>
      </HeaderContainer>
    </>
  );
}
