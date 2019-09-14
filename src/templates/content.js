import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedContents from "../components/RecommendedContents"
import Comments from "../components/Comments"

import * as S from "../components/ContentPost/styled"

const Content = ({ data, pageContext }) => {
  const content = data.markdownRemark
  const next = pageContext.nextContent
  const previous = pageContext.previousContent

  return (
    <Layout>
      <SEO
        title={content.frontmatter.title}
        description={content.frontmatter.description}
        image={content.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostDate>
          {content.frontmatter.date} • {content.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{content.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{content.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
        {/* faz o mesmo que o document.innerHTML */}
      </S.MainContent>
      <RecommendedContents next={next} previous={previous} />
      <Comments url={content.fields.slug} title={content.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Content($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`

export default Content
