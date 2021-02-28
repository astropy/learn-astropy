import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

/*
 * SEO component that adds tags to the page's header using react-helmet.
 */
export default function SEO({ children, location, title, description, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            twitter
          }
        }
      }
    `
  );

  // The description can be overidden for individual pages via description
  // prop.
  const desc = description || site.siteMetadata.description;

  // The page's canonical URL
  const canonicalUrl = site.siteMetadata.siteUrl + location.pathname;

  return (
    <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang="en" dir="ltr" />
      <title>{title}</title>
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/astropy_logo_notext.svg" />
      <link rel="alternate icon" href="/astropy_favicon.ico" />
      {/* General meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph */}
      <meta property="og:url" content={canonicalUrl} key="ogurl" />
      <meta
        property="og:image"
        content={image || '/learn-astropy-logo.png'}
        key="ogimage"
      />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsiteurl"
      />
      <meta property="og:description" content={desc} key="ogdesc" />
      {/* Twitter card */}
      <meta
        name="twitter:site"
        content={site.siteMetadata.twitter}
        key="twittersite"
      />
      {children}
    </Helmet>
  );
}

SEO.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  image: PropTypes.string,
};
