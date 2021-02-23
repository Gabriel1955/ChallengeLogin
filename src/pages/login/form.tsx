import { Footer, FormContent, ContainerButton, Link } from './styles'
import { Input, Form, Button, Title, SubTitle } from '../../components'
import { ReactElement } from 'react'

function FormLogin({ onsubmit }): ReactElement {
  return (
    <FormContent>
      <Form onsubmit={onsubmit}>
        <Title>
          Olá, seja <div>bem-vindo!</div>
        </Title>
        <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
        <Input
          data-cy="input-username"
          name="Username"
          placeholder="user.name@mail.com"
          label="E-MAIL"
          rules={[{ required: true, message: 'Digite um email' }]}
        />
        <Input
          data-cy="input-password"
          name="Password"
          placeholder="****"
          label="SENHA"
          type="password"
          rules={[{ required: true, message: 'Digite uma senha' }]}
        />
        <ContainerButton>
          <Button data-cy="button-submit">Entrar</Button>
        </ContainerButton>
        <Footer>
          Esqueceu seu login ou senha? Clique <Link>aqui</Link>
        </Footer>
      </Form>
    </FormContent>
  )
}

export default FormLogin
