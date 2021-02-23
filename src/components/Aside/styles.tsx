import styled from 'styled-components'

export const Aside = styled.div`
  background-image: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%),
    url('/assets/img_background.png');
  background-size: cover;
  @media (max-width: 767px) {
    position: relative;
    z-index: 1;
    height: 60vh;
  }
  @media (min-width: 768px) {
    flex: 2;
    height: 100vh;
    background-position: center;
  }
  @media (min-width: 1024px) {
    flex: 2;
    height: 100vh;
  }
`
