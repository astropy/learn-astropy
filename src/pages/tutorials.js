import React from 'react';
import PropTypes from 'prop-types';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

import Layout from '../components/layout';
import {
  SearchLayout,
  SearchBoxArea,
  SearchResultsArea,
  SearchRefinementsArea,
} from '../components/searchLayout';
import SEO from '../components/seo';
import searchClient from '../searchClient';

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
          <SearchRefinementsArea>Refinements</SearchRefinementsArea>
          <SearchResultsArea>
            <Hits />
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
