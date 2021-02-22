import styled from 'styled-components'

export const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  color: #383E71;
  text-align: center;
  @media(max-width: 767px) {
    font-size: 24px;
    line-height: 32px;
  }     

`
export const SubTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  color: #989FDB;
  text-align: center;
  @media(max-width: 767px) {
    font-size: 12px;
    line-height: 20px;
  } 
`
export const Footer = styled.div` 
  font-style: normal;
  font-weight: normal;
  text-align: center;
  @media(max-width: 767px) {
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  } 

`
  // color: #989FDB;

export const Aside = styled.div`
  background-image: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url('/assets/img_background.png');
  background-size: cover;
  @media(max-width: 767px) {
    position: relative;
    z-index: 1;
    height:60vh;
  }
  @media(min-width: 768px){
    flex: 2;
    height:100vh;
  } 
`
export const Background = styled.div`
  @media(max-width: 767px) {
    flex: 1;
    position: relative;
    height:100vh;
    z-index: 1;
    background-color: #130525;
  }
`
export const BackgroundForm = styled.div`
  @media(max-width: 767px) {
    z-index: 2;
    position: absolute;
    top: 22%;
    width : 80%;
    height: 22pc;
    background: #FAF5FF;
    border-radius: 8px;
    flex: 2;
  }
`
export const FormContent = styled.div`
  justify-content: center;

  @media(max-width: 767px) {
    padding: 0 7% 0 7%;
    z-index: 2;
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  @media(max-width: 767px) {
    z-index: 0;
    position: relative;
  }
  @media(min-width: 768px){
    display: flex;
  } 
`

  