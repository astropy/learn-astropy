import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin: var(--astropy-size-xl) auto 0;
  max-width: var(--astropy-content-width);
  padding: 0 var(--astropy-size-s);

  nav ul {
    list-style: none;
    padding-left: 0;
  }

  nav a {
    font-weight: 500;
  }

  nav ul li:first-child a {
    font-weight: 700;
  }

  .copyright {
    margin-top: var(--astropy-size-l);
  }
`;

/*
 * Footer component (contained within a Layout component).
 */
export default function Footer() {
  return (
    <StyledFooter>
      <nav>
        <ul>
          <li>
            <Link to="/">Learn Astropy</Link>
          </li>
          <li>
            <Link to="/contributing/">Contribute to Learn Astropy</Link>
          </li>
        </ul>
      </nav>
      <p className="copyright">
        Copyright {new Date().getFullYear()} The Astropy Developers
      </p>
    </StyledFooter>
  );
}
