import React, { useState } from 'react';

import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 30px;
  margin: 0 auto;
  max-width: 58.3%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const SubmitInput = styled.button`
  background-color: #f8f5f0;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const SearchBox = styled.div`
  flex: 1 1 0;

  input {
    width: 100%;
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
