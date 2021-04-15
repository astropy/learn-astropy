import React, { useState } from 'react';

import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 30px;
  margin: 0 auto;
  max-width: 58.3%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 1.2rem;
`;

const SubmitInput = styled.button`
  border: none;
  border-radius: 0.25rem 0 0 0.25rem;
  cursor: pointer;
  margin: 0;
  padding: 0.5rem;

  &:hover {
    color: #ffffff;
    background-color: var(--astropy-primary-color);
  }
`;

const SearchBox = styled.div`
  flex: 1 1 0;

  input {
    width: 100%;
    border: none;
    border-radius: 0 0.25rem 0.25rem 0;
    padding: 0.5rem;
    margin: 0;
  }
`;

/*
 * Search bar located within the Header.
 */
export default function HeaderHeroSearch() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // don't reload page on submission
    console.log(`Searched for: ${query}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SubmitInput as="input" type="submit" value="Search" />
      <SearchBox>
        <label htmlFor="search">
          <input
            type="search"
            id="search"
            name="search"
            value={query}
            placeholder="Search the universe of Astropy"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </SearchBox>
    </StyledForm>
  );
}
