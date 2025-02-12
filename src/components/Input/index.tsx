import { ReactElement } from 'react'
import { InputStyled, ContentInput } from './styles'

export default function Input(_props): ReactElement {
  return (
    <ContentInput>
      <InputStyled {..._props} Invalideted={true} />
      <div>X</div>
    </ContentInput>
  )
}
