import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Logo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 216, height: 76) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <S.LogoWrapper fixed={logoImage.childImageSharp.fixed} />
}

export default Logo
