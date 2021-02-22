
import {Title, SubTitle, Footer, FormContent} from "./styles"

import { Input, Form , Button} from "../../components"

const FormLogin = ({onsubmit}) =>{
  return (
    <FormContent>
      <Form onsubmit={onsubmit}>
        <Title>Olá, seja bem-vindo!</Title>
        <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
        <Input name="Username" label="E-MAIL" type="email" required />
        <Input name="Password" label="SENHA" type="password" required />
        <Button>Entrar</Button>
        <Footer>Esqueceu seu login ou senha? Clique aqui</Footer>
      </Form>
    </FormContent>
  )
}

export default FormLogin