/*
 * Customized version of the CurrentRefinements widget that transforms the
 * titles of attribues.
 */

import React from 'react';
import styled from 'styled-components';

import { CurrentRefinements as CurrentRefinementsCore } from 'react-instantsearch-dom';

/**
 * Custom prefixes for item labels.
 *
 * First items in the individual arrays are the prefixes of labels, not
 * including the ":". The second items are replacement values for those
 * prefixes.
 */
const labelPrefixes = [
  ['astropy_package_keywords', 'Astropy package'],
  ['python_package_keywords', 'Python package'],
  ['task_keywords', 'Task'],
  ['science_keywords', 'Science'],
];
const labelPrefixMap = new Map(labelPrefixes);

/**
 * Transforms the label attribute of a refinement items to use a customized
 * label from labelPrefixes.
 *
 * This function identifies refinements based on the prefix for the label,
 * which is the text before the ":".
 */
export const itemTransformer = (items) =>
  items.map((item) => {
    const labelParts = item.label.split(':', 2);
    const suggestedPrefix = labelPrefixMap.get(labelParts[0]);
    if (suggestedPrefix) {
      item.label = `${suggestedPrefix}: ${labelParts[1]}`;
    }
    return item;
  });

const StyledCurrentRefinements = styled(CurrentRefinementsCore)`
  margin-top: 0.25rem;
`;

/**
 * Custom version of the CurrentRefinements instant search widget
 * that includes custom styling and label transformations.
 */
const CurrentRefinements = () => (
  <>
    <StyledCurrentRefinements transformItems={itemTransformer} />
  </>
);

export default CurrentRefinements;
