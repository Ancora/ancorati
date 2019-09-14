import styled from "styled-components"
import media from "styled-media-query"
/* import { Link } from "gatsby" */
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ContentItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: #000;
    text-shadow: 1px 1px #0000cd, 10px 10px 6px #000;
  }
`

export const ContentItemWrapper = styled.section`
  align-items: center;
  /* border-bottom: 1px solid var(--borders); */
  border: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    /*     border: none; */
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const ContentItemTag = styled.div`
  align-items: center;
  background: ${props => (props.background ? props.background : "#0000cd")};
  border-radius: 50%;
  color: var(--contentColor);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
  ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const ContentItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const ContentItemDate = styled.time`
  font-size: 0.9rem;
`

export const ContentItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const ContentItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
