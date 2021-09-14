/*
 * An extension of the SortBy component that toggles between priority and
 * relevance-based sorting whenever the user enters a query string.
 *
 * The component is "virtual" since there is not visual interaction; the
 * toggling happens automatically based on the search state.
 */

import React from 'react';

import PropTypes from 'prop-types';

import { connectStateResults, connectSortBy } from 'react-instantsearch-dom';

/*
 * The VirtualSortBy is a "virtual" SortBy component, meaning that it takes
 * the props of SortBy and can control sorting; but it does not render in the
 * UI.
 */
const VirtualSortBy = connectSortBy(() => null);

const PrioritySortCore = ({
  searchState,
  priorityRefinement,
  relevanceRefinement,
}) => {
  const refinement = searchState.query
    ? relevanceRefinement
    : priorityRefinement;

  const items = [
    { value: priorityRefinement, label: priorityRefinement },
    { value: relevanceRefinement, label: relevanceRefinement },
  ];

  return <VirtualSortBy defaultRefinement={refinement} items={items} />;
};

PrioritySortCore.propTypes = {
  searchState: PropTypes.object,
  priorityRefinement: PropTypes.string,
  relevanceRefinement: PropTypes.string,
};

const PrioritySort = connectStateResults(PrioritySortCore);

export default PrioritySort;
