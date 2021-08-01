import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin: var(--astropy-size-xl) auto 0;
  max-width: var(--astropy-content-width);
  padding: 0 var(--astropy-size-s);
`;

/*
 * Footer component (contained within a Layout component).
 */
export default function Footer() {
  return (
    <StyledFooter>
      <p>
        <Link to="/">Learn Astropy</Link>
      </p>
      <ul>
        <li>
          <Link to="/">Guides</Link>
        </li>
        <li>
          <Link to="/">Tutorials</Link>
        </li>
        <li>
          <Link to="/">Documentation</Link>
        </li>
        <li>
          <Link to="/">Examples</Link>
        </li>
        <li>
          <Link to="/contributing/">Contribute to Learn Astropy</Link>
        </li>
      </ul>
      <p>Copyright {new Date().getFullYear()} The Astropy Developers</p>
    </StyledFooter>
  );
}
