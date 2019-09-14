import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  /* border-right: 1px solid var(--borders); */
  display: flex;
  flex-direction: column;
  /* background: -moz-linear-gradient(45deg, navy 50%, black);
  background: -webkit-linear-gradient(45deg, navy 50%, black);
  background: -o-linear-gradient(45deg, navy 50%, black);
  background: linear-gradient(45deg, navy 50%, black); */
  background: var(--mediumBackground);
  height: 100vh;
  position: fixed;
  padding: 1rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`
