const path = require("path");
const _ = require("lodash");

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    return new Promise((resolve, reject) => {
        const tutorialTemplate = path.resolve('src/templates/tutorial.js')
        const sectionTemplate = path.resolve('src/templates/section.js')
        resolve(
            graphql(`
                {
                    allContentfulTutorial (limit:100) {
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
                    reject(result.errors)
                }
                result.data.allContentfulTutorial.edges.forEach((edge) => {
                    createPage ({
                        path: edge.node.slug,
                        component: tutorialTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                return
            })
        )
    })
}