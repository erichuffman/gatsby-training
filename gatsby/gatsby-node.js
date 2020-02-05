/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
  // createPages (note the plural) is a Gatsby API lifecycle hook.
  // Each lifecycle hook receives an `actions` object with helper methods.
  // We will be leveraging the `createPage` function.
  const { createPage } = actions;
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  // Here we query all of our movies and get their url (path.alias).
  // Note we rename allNodeMovie to 'movies'
  const result = await graphql(`
    query {
      movies: allNodeMovie {
        edges {
          node {
            path {
              alias
            }
          }
        }
      }
    }
  `);

  // We then map over each movie in the array.
  result.data.movies.edges.forEach(({ node }) => {
    // Now we call the createPage helper function and pass it
    // the necessary data.
    createPage({
      // The relative url we want for the page when published.
      path: node.path.alias,
      // The path to the template component for this page.
      component: path.resolve('./src/templates/movie.js'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.path.alias
      }
    });
  });
};
