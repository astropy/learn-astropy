import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FullWidthContainer = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 0 -50vw;
  background-color: var(--astropy-nav-header-color);
  color: var(--astropy-nav-header-text-color);
`;

const StyledPageCoverContent = styled.header`
  margin: 0 auto;
  max-width: var(--astropy-content-width);
  padding: var(--astropy-size-m) var(--astropy-size-s);

  p {
    font-size: var(--astropy-font-size-ml);
  }
`;

/*
 * The page cover is meant to contain the title and lead paragraph of a
 * content page.
 */
export default function PageCover({ children }) {
  return (
    <FullWidthContainer>
      <StyledPageCoverContent>{children}</StyledPageCoverContent>
    </FullWidthContainer>
  );
}

PageCover.propTypes = {
  children: PropTypes.node.isRequired,
};
