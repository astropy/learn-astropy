/*
 * Template for contributing/documentation pages that are sourced from
 * Markdown.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;

export default function Template({ data, location }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO location={location} title="Home" />

      <h1>{frontmatter.title}</h1>
      {/* eslint-disable react/no-danger */}
      <div className="doc-content" dangerouslySetInnerHTML={{ __html: html }} />
      {/* eslint-enable react/no-danger */}
    </Layout>
  );
}

Template.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
