import styled from 'styled-components'

export const InputStyled = styled.input`
  height: 48px;
  width: 100%;
  border: 1px solid #989fdb;
  box-sizing: border-box;
  border-radius: 8px;
  padding-left: 20px;
  color: #383e71;
  position: relative;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px #989fdb;
  }
`

export const ContentInput = styled.div``

// export const ContentInput = styled.div`
//   & > input {
//     &:invalid:not(:focus):not(:placeholder-shown) {
//       border: 1px solid #ff377f;
//       z-index: 2;
//     }
//     &:not(invalid:not(:focus):not(:placeholder-shown)) {
//       z-index: 3;
//     }
//   }
//   & > div {
//     position: absolute;
//     color: #ff377f;
//     top: 62px;
//     right: 20px;
//     z-index: 2;
//   }
// `
