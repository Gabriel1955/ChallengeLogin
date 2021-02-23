import styled from 'styled-components'

export const FormControl = styled.div`
  position: relative;
  margin-top:10px;
  & > label {
    margin-left: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 280%;
    display: flex;
    align-items: center;
    color: #383e71;
  }
  & > input {
    display: block;
  }
`
export const TextInvalid = styled.div`
  z-index: 2;
  position: relative;
  color: #ff377f;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 30px;
  margin-left: 10px;
`
