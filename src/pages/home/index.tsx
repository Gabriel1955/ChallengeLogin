import { ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { ContainerHome } from './styles'
import { Content } from '../../components'
import { User } from '../../interfaces/User'

export default function Home(): ReactElement {
  const User: User = useSelector((state) => state.User)
  const router = useRouter()
  useEffect(() => {
    if (!User.Name) {
      router.push('/login')
    }
  }, [User, router])

  return (
    <Content show={User.Name}>
      <ContainerHome>
        <h1>{`Bem Vindo, ${User.Name}`} </h1>
      </ContainerHome>
    </Content>
  )
}
