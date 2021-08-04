/**
 * The ResultCard renders an algoliasearch hit.
 *
 * See https://www.algolia.com/doc/api-reference/widgets/hits/react/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Snippet } from 'react-instantsearch-dom';

const ResultCardContainer = styled.div`
  h2 {
    line-height: 1.1;
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--astropy-font-size-m);
  }

  a {
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }

  .sidebyside {
    display: flex;
  }

  .sidebyside__image {
    margin-right: 1rem;
    flex: 0 0 8rem;
  }

  .sidebyside__image img {
    width: 100%;
  }

  .sidebyside__content {
    flex: 1 1 auto;

    font-size: var(--astropy-font-size-s);
  }

  .sidebyside__content *:first-child {
    margin-top: 0;
  }
`;

const StyledSnippetBlock = styled.blockquote`
  padding: 0.5rem 1rem;
  margin-left: 0;
  margin-right: 0;
  border-left: 4px solid #ddd;
  background: #eee;
  border-radius: var(--astropy-border-radius-s);

  &::before {
    content: '[…] ';
    opacity: 0.5;
  }

  &::after {
    content: '[…]';
    opacity: 0.5;
  }
`;

const StyledSnippet = styled(Snippet)`
  span,
  ${({ tagName }) => tagName} {
    // more specific than Algolia theme
    font-size: var(--astropy-font-size-s);
  }

  ${({ tagName }) => tagName} {
    background: yellow;
  }
`;

const ResultCard = ({ hit }) => (
  <ResultCardContainer>
    <a href={hit.url}>
      <h2>{hit.h1}</h2>
    </a>
    <div className="sidebyside">
      {hit.thumbnail_url && (
        <div className="sidebyside__image">
          <img src={hit.thumbnail_url} alt="" />
        </div>
      )}
      <div className="sidebyside__content">
        <p>{hit.root_summary}</p>
        {hit._snippetResult.content.matchLevel !== 'none' && (
          <StyledSnippetBlock>
            <StyledSnippet
              attribute="content"
              hit={hit}
              tagName="mark"
              nonHighlightedTagName="span"
            />{' '}
          </StyledSnippetBlock>
        )}
      </div>
    </div>
  </ResultCardContainer>
);

ResultCard.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default ResultCard;
