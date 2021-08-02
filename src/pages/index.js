import React from 'react';
import PropTypes from 'prop-types';

import {
  InstantSearch,
  SearchBox,
  Configure,
  Hits,
} from 'react-instantsearch-dom';

import Layout from '../components/layout';
import { SearchLayout } from '../components/searchLayout';
import SEO from '../components/seo';
import PageCover from '../components/pageCover';
import searchClient from '../searchClient';

export default function IndexPage({ location }) {
  return (
    <Layout>
      <SEO location={location} title="Home" />
      <PageCover>
        <h1>Learn Astropy</h1>
        <p>
          Learn how to use Python for astronomy through tutorials and guides
          that cover Astropy and other packages in the astronomy Python
          ecosystem.
        </p>
      </PageCover>

      <InstantSearch
        searchClient={searchClient}
        indexName="astropy_fulltext_dev"
      >
        <Configure distinct facetingAfterDistinct />
        <SearchLayout>
          <div className="search-box-area">
            <SearchBox />
          </div>
          <div className="search-refinements-area">
            <p>Refinements</p>
          </div>
          <div className="search-results-area">
            <Hits />
          </div>
        </SearchLayout>
      </InstantSearch>
    </Layout>
  );
}

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
