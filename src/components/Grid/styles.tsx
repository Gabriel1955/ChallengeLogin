import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
`

export const Col = styled.div`
  flex: ${(porps) => porps.size};
`
