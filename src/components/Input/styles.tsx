import styled from 'styled-components'

export const InputStyled = styled.input`
  height: 48px;
  width: 100%;
  border: 1px solid #989FDB;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
      box-shadow: 0px 0px 4px #989FDB;
  }
`