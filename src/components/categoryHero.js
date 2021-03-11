import React from 'react';

import styled from 'styled-components';

const StyledCategoryHeroContainer = styled.nav`
  max-width: 60rem;
  margin: -70px auto 30px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const StyledCategoryCard = styled.div`
  background-color: #fa743b;
  flex: 1 1 auto;
  padding: 1.25rem;
  border: non;
  border-radius: 10px;
  box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.4);
  margin: 0 0.5rem;
  width: 5rem;
`;

/*
 * Container for category navigation cards that are featured in the header.
 */
export default function CategoryHero() {
  return (
    <StyledCategoryHeroContainer>
      <StyledCategoryCard>
        <h2>Guides</h2>
        <p>
          Guides are comprehensive, conceptually-focused documents providing
          stand-alone introductions to core packages in addition to the
          underlying astronomical concepts.
        </p>
      </StyledCategoryCard>
      <StyledCategoryCard>
        <h2>Tutorials</h2>
        <p>
          Tutorials are step-by-step cookbooks for common activities that
          incorporate several packages. They are more specific and less
          conceptual than Guides but more extended than Examples.
        </p>
      </StyledCategoryCard>
      <StyledCategoryCard>
        <h2>Documentation</h2>
        <p>
          Documentation is the complete description of a package with all
          requisite details, including usage, dependencies, and examples.
        </p>
      </StyledCategoryCard>
      <StyledCategoryCard>
        <h2>Examples</h2>
        <p>
          Examples are stand-alone code snippets that live in the astropy
          documentation that demonstrate a specific functionality within a
          package.
        </p>
      </StyledCategoryCard>
    </StyledCategoryHeroContainer>
  );
}
