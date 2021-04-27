/*
 * Styled version of the Algolia InstantSearch RefinementList component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/
 */

import styled from 'styled-components';
import { RefinementList as BaseRefinementList } from 'react-instantsearch-dom';

const RefinementList = styled(BaseRefinementList)`
  .ais-RefinementList-labelText {
    margin-left: 0.25rem;
  }
`;

export default RefinementList;
