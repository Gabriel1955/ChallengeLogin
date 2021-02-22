import styled from 'styled-components'

export const FormControl = styled.div`
  position: relative; 
  & > label {
    margin-left: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 480%;
    display: flex;
    align-items: center;
    color: #383E71;
  }
  & > input {
    display: block;
  }
`