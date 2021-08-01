import React from 'react';

import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  text-align: center;
  background: url('/starry_background.png') no-repeat center center;
  background-size: cover;
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
