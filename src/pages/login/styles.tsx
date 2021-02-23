import styled from 'styled-components'

export const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  color: #383e71;
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 48px;
  }
`
export const SubTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  color: #989fdb;
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 20px;
  }
`
export const Footer = styled.div`
  font-style: normal;
  font-weight: normal;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
  @media (min-width: 1024px) {
    margin-top: 32px;
    font-size: 14px;
    line-height: 20px;
    color: #989fdb;
  }
`
export const Aside = styled.div`
  background-image: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%),
    url('/assets/img_background.png');
  background-size: cover;
  @media (max-width: 767px) {
    position: relative;
    z-index: 1;
    height: 60vh;
  }
  @media (min-width: 1024px) {
    flex: 2;
    height: 100vh;
  }
`
export const Background = styled.div`
  @media (max-width: 767px) {
    flex: 1;
    position: relative;
    height: 100vh;
    z-index: 1;
    background-color: #130525;
  }
  @media (min-width: 1024px) {
    flex: 3;
  }
`
export const BackgroundForm = styled.div`
  @media (max-width: 767px) {
    z-index: 2;
    position: absolute;
    top: 22%;
    width: 80%;
    height: 22pc;
    background: #faf5ff;
    border-radius: 8px;
    flex: 2;
  }
  @media (min-width: 1024px) {
    flex: 2;
  }
`
export const FormContent = styled.div`
  justify-content: center;

  @media (max-width: 767px) {
    padding: 0 7% 0 7%;
    z-index: 2;
  }
  @media (min-width: 1024px) {
    padding: 28% 35% 0 20%;
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    z-index: 0;
    position: relative;
  }
  @media (min-width: 102p4x) {
    display: flex;
  }
`
