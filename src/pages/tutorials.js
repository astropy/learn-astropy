import React from 'react';
import PropTypes from 'prop-types';
import {
  InstantSearch,
  SearchBox,
  Configure,
  ClearRefinements,
} from 'react-instantsearch-dom';

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
import RefinementList from '../components/instantsearch/refinementList';
import CurrentRefinements from '../components/instantsearch/currentRefinements';
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
        <Configure distinct facetingAfterDistinct />
        <SearchLayout>
          <SearchBoxArea>
            <SearchBox />
            <CurrentRefinements />
            <ClearRefinements />
          </SearchBoxArea>
          <SearchRefinementsArea>
            <SearchRefinementsSection>
              <h2>Astropy packages</h2>
              <RefinementList
                attribute="astropy_package_keywords"
                limit={10}
                showMore
                showMoreLimit={30}
                searchable
              />
            </SearchRefinementsSection>
            <SearchRefinementsSection>
              <h2>Python packages</h2>
              <RefinementList
                attribute="python_package_keywords"
                limit={10}
                showMore
                showMoreLimit={30}
                searchable
              />
            </SearchRefinementsSection>
            <SearchRefinementsSection>
              <h2>Tasks</h2>
              <RefinementList
                attribute="task_keywords"
                limit={10}
                showMore
                showMoreLimit={30}
                searchable
              />
            </SearchRefinementsSection>
            <SearchRefinementsSection>
              <h2>Science domains</h2>
              <RefinementList
                attribute="science_keywords"
                limit={10}
                showMore
                showMoreLimit={30}
                searchable
              />
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
