/*
 * Styled version of the Algolia InstantSearch PoweredBy component.
 *
 * https://www.algolia.com/doc/api-reference/widgets/powered-by/react/
 */

import styled from 'styled-components';
import { PoweredBy as BasePoweredBy } from 'react-instantsearch-dom';

/* PoweredBy Algolia InstantSearch widget that's styled.
 *
 * https://www.algolia.com/doc/api-reference/widgets/powered-by/react/
 */
const PoweredBy = styled(BasePoweredBy)`
  margin-left: var(--astropy-size-m);
  .ais-PoweredBy-text {
    color: var(--astropy-text-color);
    margin-right: var(--astropy-size-s);
  }
  .ais-PoweredBy-logo path:last-of-type {
    fill: var(--algolia-primary-color);
  }
`;

export default PoweredBy;
