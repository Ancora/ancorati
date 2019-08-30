import styled from "styled-components"

// Layout que vai englobar toda a aplicação
export const LayoutWrapper = styled.section`
  display: flex;
`

// Layout onde ficará o conteúdo principal da página
export const LayoutMain = styled.main`
  background: -moz-linear-gradient(45deg, navy 50%, black);
  background: -webkit-linear-gradient(45deg, navy 50%, black);
  background: -o-linear-gradient(45deg, navy 50%, black);
  background: linear-gradient(45deg, navy 50%, black);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
`
