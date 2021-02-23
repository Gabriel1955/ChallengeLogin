import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Content } from './styles'

export default function Home() {
  const User = useSelector((state) => state.User)
  const router = useRouter()
  useEffect(() => {
    if (!User.Name) {
      router.push('/login')
    }
  }, [User])

  return (
    <Content>
      <h1>{`Bem Vindo, ${User.Name}`} </h1>
    </Content>
  )
}
