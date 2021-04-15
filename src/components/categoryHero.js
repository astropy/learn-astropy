import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const StyledCategoryHeroContainer = styled.nav`
  max-width: 60rem;
  margin: -70px auto 80px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const StyledCategoryCard = styled.div`
  color: #ffffff;
  background-color: var(--astropy-primary-color);
  flex: 1 1 auto;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.4);
  margin: 0 0.5rem;
  width: 5rem;

  h2 {
    margin: 0;
    text-align: center;
  }

  .subtitle {
    text-align: center;
  }

  a {
    color: #ffffff;
  }

  a:hover {
    opacity: 90%;
  }
`;

/*
 * Container for category navigation cards that are featured in the header.
 */
export default function CategoryHero() {
  return (
    <StyledCategoryHeroContainer>
      <StyledCategoryCard>
        <h2>
          <Link to="/guides">Guides</Link>
        </h2>
        <p className="subtitle">
          Guides are comprehensive, conceptually-focused documents providing
          stand-alone introductions to core packages in addition to the
          underlying astronomical concepts.
        </p>
      </StyledCategoryCard>
      <StyledCategoryCard>
        <h2>
          <Link to="/tutorials">Tutorials</Link>
        </h2>
        <p className="subtitle">
          Tutorials are step-by-step cookbooks for common activities that
          incorporate several packages. They are more specific and less
          conceptual than Guides but more extended than Examples.
        </p>
      </StyledCategoryCard>
      <StyledCategoryCard>
        <h2>
          <Link to="/documentation">Documentation</Link>
        </h2>
        <p className="subtitle">
          Documentation is the complete description of a package with all
          requisite details, including usage, dependencies, and examples.
        </p>
      </StyledCategoryCard>
      <StyledCategoryCard>
        <h2>
          <Link to="/examples">Examples</Link>
        </h2>
        <p className="subtitle">
          Examples are stand-alone code snippets that live in the astropy
          documentation that demonstrate a specific functionality within a
          package.
        </p>
      </StyledCategoryCard>
    </StyledCategoryHeroContainer>
  );
}
