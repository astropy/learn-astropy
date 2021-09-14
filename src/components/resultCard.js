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
  .result-title {
    display: flex;
    flex: 1 1 0;
    align-items: center;
    margin-bottom: 1rem;
  }

  h2 {
    line-height: 1.1;
    margin: 0;
    font-size: var(--astropy-font-size-m);
  }

  a {
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }

  .content-type-tag {
    background-color: var(--astropy-primary-color);
    border-radius: var(--astropy-border-radius-m);
    color: white;
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-right: var(--astropy-size-s);
    padding: 0.125rem var(--astropy-size-xs);
  }

  .root-title {
    font-size: var(--astropy-font-size-s);
    margin: -0.5rem 0 1rem;
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

const ResultCard = ({ hit }) => {
  let linkUrl;
  let title;

  if (hit.content_type === 'guide' && hit.importance > 1) {
    linkUrl = hit.url;
    title = hit.h1;
  } else {
    linkUrl = hit.root_url;
    title = hit.root_title;
  }

  return (
    <ResultCardContainer>
      <header className="result-title">
        <span className="content-type-tag">{hit.content_type}</span>
        <a href={linkUrl}>
          <h2>{title}</h2>
        </a>
      </header>
      {hit.content_type === 'guide' && hit.importance > 1 && (
        <p className="root-title">
          Inside{' '}
          <a href="{hit.root_url}">
            <em>{hit.root_title}</em>
          </a>
        </p>
      )}

      <div className="sidebyside">
        {hit.thumbnail_url && (
          <div className="sidebyside__image">
            <a href={linkUrl}>
              <img src={hit.thumbnail_url} alt="" />
            </a>
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
};

ResultCard.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default ResultCard;
