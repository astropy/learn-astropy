import React from 'react';

import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  padding: var(--astropy-size-s) var(--astropy-size-m);
  margin: 0;
  background-color: var(--astropy-nav-header-color);
  color: var(--astropy-nav-header-text-color);
`;

/*
 * Header component that includes the logo, search bar, and navigation tabs.
 */
export default function NavHeader() {
  return (
    <>
      <HeaderContainer>
        <p>Learn Astropy</p>
      </HeaderContainer>
    </>
  );
}
