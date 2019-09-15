const contentQuery = `{
    contents: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          objectID: id
          fields {
            slug
          }
          frontmatter {
            title
            background
            category
            date_timestamp: date
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }
`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: contentQuery,
    transformer: ({ data }) => flatten(data.contents.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings,
  },
]

module.exports = queries
