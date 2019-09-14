import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const LogoWrapper = styled(Img)`
  height: 5.43rem;
  margin: auto;
  width: 15.43rem;

  ${media.lessThan("large")`
    height: 2.715rem;
    width: 7.715rem;
  `}
`
