/**
 * Extension to the Algolia Hits widget that passes props through to individual
 * Hit components.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connectHits } from 'react-instantsearch-dom';

/**
 * Custom Hits component that passes props to individual Hit components.
 */
const Hits = ({ hits, hitComponent, className = '' }) => {
  const HitComponent = hitComponent;

  return (
    <ol className={className}>
      {hits.map((hit) => (
        <li key={hit.objectID} className="hits-item">
          <HitComponent hit={hit} />
        </li>
      ))}
    </ol>
  );
};

const HitPropTypes = PropTypes.shape({
  objectID: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
});

Hits.propTypes = {
  hits: PropTypes.arrayOf(HitPropTypes.isRequired).isRequired,
  hitComponent: PropTypes.func.isRequired,
  className: PropTypes.string,
};

/**
 * The Hits component, connected to Algolia instantsearch.
 */
const ConnectedHits = connectHits(Hits);

/**
 * Styled components wrapper for ConnectedHits.
 */
export const StyledHits = styled(ConnectedHits)`
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;

  .hits-item {
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
  }
`;
