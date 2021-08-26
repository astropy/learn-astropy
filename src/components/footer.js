import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FullWidthContainer = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: var(--astropy-size-xl) -50vw 0;
  background-color: rgb(250, 250, 250);
`;

const StyledFooter = styled.footer`
  margin: 0 auto;
  max-width: var(--astropy-content-width);
  padding: var(--astropy-size-m) var(--astropy-size-s);

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
    <FullWidthContainer>
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
    </FullWidthContainer>
  );
}
