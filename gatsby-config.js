module.exports = {
  siteMetadata: {
    title: 'Learn Astropy',
    description:
      'Astropy is a Python library for use in astronomy. Learn Astropy provides a portal to all of the Astropy educational material.',
    author: 'Astropy Project',
    twitter: '@astropy',
    siteUrl: 'https://learn.astropy.org',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-docs`,
        path: `${__dirname}/src/contributing`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
