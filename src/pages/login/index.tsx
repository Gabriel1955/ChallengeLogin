import { ContainerAside, ContainerForm, ContainerLogin } from './styles'
import { Aside, Content } from '../../components'
import Form from './form'
import { useDispatch, useSelector } from 'react-redux'
import { signInRequest } from './store/actions'
import { ReactElement, useEffect } from 'react'
import { useRouter } from 'next/router'
import { User } from '../../interfaces/User'

export default function Login(): ReactElement {
  const dispatch = useDispatch()
  const User: User = useSelector((state) => state.User)
  const router = useRouter()
  useEffect(() => {
    if (User.Name) {
      router.push('/')
    }
  }, [User, router])

  const handleSubmmit = (payload): void => {
    const { Username, Password } = payload
    dispatch(signInRequest(Username, Password))
  }

  return (
    <Content show={!User.Name}>
      <ContainerLogin>
        <ContainerAside>
          <Aside />
        </ContainerAside>
        <ContainerForm>
          <Form onsubmit={handleSubmmit} />
        </ContainerForm>
      </ContainerLogin>
    </Content>
  )
}
