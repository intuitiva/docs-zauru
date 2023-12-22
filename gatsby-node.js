const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const tutorialTemplate = path.resolve("src/templates/tutorial.js");
    resolve(
      graphql(`
        {
          allContentfulTutorial {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulTutorial.edges.forEach((edge) => {
          createPage({
            path: edge.node.slug,
            component: tutorialTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });
        return;
      })
    );
  });
};
