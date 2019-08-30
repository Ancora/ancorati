import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Logo from "../Logo"
import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Logo />
        <S.ProfileAuthor>{title}</S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

// Usando StaticQuery
/* const Profile = () => (
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}

    render={({
      site: {
        siteMetadata: { title, description },
      },
    }) => (
      <div className="Profile-wrapper">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    )}
  />
) */

export default Profile
