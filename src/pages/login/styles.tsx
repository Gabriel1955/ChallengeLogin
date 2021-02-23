import styled from 'styled-components'

export const ContainerButton = styled.div`
  @media (max-width: 767px) {
    padding: 0 20% 0 20%;
    margin-top: 3vh;
  }
  @media (min-width: 768px) {
    margin-top: 3vh;
  }
`
export const Footer = styled.div`
  font-style: normal;
  font-weight: normal;
  text-align: center;
  padding: 0 15% 0 15%;
  @media (max-width: 767px) {
    margin-top: 15px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
  @media (min-width: 768px) {
    margin-top: 32px;
    font-size: 14px;
    line-height: 20px;
    color: #989fdb;
  }
`
export const Link = styled.span`
  text-decoration: underline;
  cursor: pointer;
  @media (max-width: 767px) {
    color: #ffffff;
  }
  @media (min-width: 768px) {
    color: #9d25b0;
  }
`
export const ContainerAside = styled.div`
  @media (max-width: 767px) {
    flex: 1;
    position: relative;
    height: 100vh;
    z-index: 1;
    background-color: #130525;
  }
  @media (min-width: 768px) {
    flex: 4;
  }
  @media (min-width: 1025px) {
    flex: 3;
  }
`
export const ContainerForm = styled.div`
  @media (max-width: 767px) {
    z-index: 2;
    position: absolute;
    top: 22%;
    width: 80%;
    height: 22pc;
    border-radius: 8px;
    flex: 2;
  }
  @media (min-width: 768px) {
    flex: 5;
  }
  @media (min-width: 1025px) {
    flex: 2;
  }
`
//  background: linear-gradient(0deg, #130525 00%, #faf5ff 80%);
export const FormContent = styled.div`
  justify-content: center;

  @media (max-width: 767px) {
    padding: 5% 7% 0 7%;
    z-index: 2;
   
    background:  linear-gradient(0deg, #130525 75px, #faf5ff 10px);
    border-radius: 8px;
  }
  @media (min-width: 768px) {
    padding: 50% 15% 0 15%;
  }
  @media (min-width: 1025px) {
    padding: 28% 35% 0 20%;
  }
`
export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    z-index: 0;
    position: relative;
  }
  @media (min-width: 1025x) {
    display: flex;
  }
`
