const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`, // vai desprezar a data e hífens no nome do arquivo
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
              image
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const contents = result.data.allMarkdownRemark.edges

    contents.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/content.js"),
        context: {
          slug: node.fields.slug,
          previousContent: next,
          nextContent: previous,
        },
      })
    })

    const contentsPerPage = 7
    const numPages = Math.ceil(contents.length / contentsPerPage) // Math.ceil arredonda para cima

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve("./src/templates/content-list.js"),
        context: {
          limit: contentsPerPage,
          skip: index * contentsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}
