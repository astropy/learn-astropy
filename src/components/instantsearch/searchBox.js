/*
 * Styled SearchBox that includes the PoweredBy widget.
 */

import React from 'react';
import styled from 'styled-components';
import { SearchBox as SearchBoxCore } from 'react-instantsearch-dom';

import PoweredBy from './poweredBy';

const SearchBoxContainer = styled.div`
  display: flex; /* Lay out box+powered by in line */
`;

/* SearchBox Algolia InstantSearch widget that's styled.
 * https://www.algolia.com/doc/api-reference/widgets/search-box/react/
 */
export const StyledSearchBoxCore = styled(SearchBoxCore)`
  flex: 1 1 0;
`;

const SearchBox = () => (
  <SearchBoxContainer>
    <StyledSearchBoxCore />
    <PoweredBy />
  </SearchBoxContainer>
);

export default SearchBox;
