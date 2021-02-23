import { InputStyled, ContentInput } from './styles'

export default function Input(_props) {
  return (
    <ContentInput>
      <InputStyled {..._props} Invalideted={true} />
      {/* <div>X</div> */}
    </ContentInput>
  )
}
