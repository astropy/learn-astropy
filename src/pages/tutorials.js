import React from 'react';
import PropTypes from 'prop-types';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';

import Layout from '../components/layout';
import SEO from '../components/seo';
import searchClient from '../searchClient';
import {
  SearchLayout,
  SearchBoxArea,
  SearchResultsArea,
  SearchRefinementsArea,
  SearchRefinementsSection,
} from '../components/searchLayout';
import { StyledHits } from '../components/instantsearch/hits';
import TutorialHit from '../components/tutorialHit';

export default function TutorialsPage({ location }) {
  return (
    <Layout>
      <SEO location={location} title="Tutorials" />
      <h1>Tutorials</h1>
      <p>
        Tutorials are step-by-step cookbooks for common activities that
        incorporate several packages. They are more specific and less conceptual
        than Guides but more extended than Examples.
      </p>

      <InstantSearch
        searchClient={searchClient}
        indexName="astropy_fulltext_dev"
      >
        <SearchLayout>
          <SearchBoxArea>
            <SearchBox />
          </SearchBoxArea>
          <SearchRefinementsArea>
            <SearchRefinementsSection>
              <h2>Astropy packages</h2>
              <p>Filters...</p>
            </SearchRefinementsSection>
            <SearchRefinementsSection>
              <h2>Python packages</h2>
              <p>Filters...</p>
            </SearchRefinementsSection>
            <SearchRefinementsSection>
              <h2>Tasks</h2>
              <p>Filters...</p>
            </SearchRefinementsSection>
            <SearchRefinementsSection>
              <h2>Science domains</h2>
              <p>Filters...</p>
            </SearchRefinementsSection>
          </SearchRefinementsArea>
          <SearchResultsArea>
            <StyledHits hitComponent={TutorialHit} />
          </SearchResultsArea>
        </SearchLayout>
      </InstantSearch>
    </Layout>
  );
}

TutorialsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
