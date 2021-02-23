import styled from 'styled-components'

export const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  color: ${(props) => props.theme.colors.title};
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`
