import { ReactElement } from 'react'

export default function Content({ children, show }): ReactElement {
  return show ? children : <div />
}
