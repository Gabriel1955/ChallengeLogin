import { Title, SubTitle, Footer, FormContent } from './styles'

import { Input, Form, Button } from '../../components'

const FormLogin = ({ onsubmit }) => {
  return (
    <FormContent>
      <Form onsubmit={onsubmit}>
        <Title>
          Olá, seja <div>bem-vindo!</div>
        </Title>
        <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
        <Input
          name="Username"
          placeholder="user.name@mail.com"
          label="E-MAIL"
          rules={[{ required: true, message: 'Digite um email' }]}
        />
        <Input
          name="Password"
          placeholder="****"
          label="SENHA"
          type="password"
          rules={[{ required: true, message: 'Digite uma senha' }]}
        />
        <Button>Entrar</Button>
        <Footer>Esqueceu seu login ou senha? Clique aqui</Footer>
      </Form>
    </FormContent>
  )
}

export default FormLogin
