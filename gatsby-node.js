exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const contribTemplate = require.resolve(`./src/templates/contribTemplate.js`);
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: contribTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });
};
