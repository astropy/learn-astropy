import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const LogoContainer = styled.div`
  width: 35vw;
  padding-top: 100px;
  margin: 0 auto;

  img {
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
  }
`;

const StyledHeader = styled.header`
  height: 400px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  text-align: center;
  background: url('starry_background.png') no-repeat center center;
  background-size: cover;
`;

/*
 * Header component that includes the logo, search bar, and navigation tabs.
 */
export default function Header() {
  return (
    <StyledHeader>
      <LogoContainer>
        <Link to="/">
          <img src="/learn-astropy-logo.png" alt="Learn Astropy" />
        </Link>
      </LogoContainer>
    </StyledHeader>
  );
}
