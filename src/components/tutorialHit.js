/**
 * Component for an Algolia search hit for a tutorial.
 *
 * See https://www.algolia.com/doc/api-reference/widgets/hits/react/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Snippet } from 'react-instantsearch-dom';

const TutorialHitContainer = styled.article`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 12rem auto;
  column-gap: 1rem;
  grid-column-gap: 1rem;
  row-gap: 1rem;
  grid-row-gap: 1rem;
  font-size: 1rem;

  p {
    margin: 0;
  }

  .heading-area {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  .thumbnail-area {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .content-area {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  h2 {
    line-height: 1.1;
    margin: 0;
    // margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .thumbnail {
    width: 100%;
  }

  a {
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }
`;

const StyledSnippetBlock = styled.blockquote`
  padding: 0.5rem 1rem;
  margin-left: 0;
  margin-right: 0;
  border-left: 4px solid #ddd;
  background: #eee;
  border-radius: 0.5rem;

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
    font-size: 1.1rem;
  }

  ${({ tagName }) => tagName} {
    background: yellow;
  }
`;

const TutorialHit = ({ hit }) => (
  <TutorialHitContainer>
    <header className="heading-area">
      <a href={hit.url}>
        <h2>{hit.h1}</h2>
      </a>
    </header>
    <div className="thumbnail-area">
      <img className="thumbnail" src={hit.thumbnail} alt="" />
    </div>
    <div className="content-area">
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
      <p>{hit.content}</p>
    </div>
  </TutorialHitContainer>
);

TutorialHit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default TutorialHit;
