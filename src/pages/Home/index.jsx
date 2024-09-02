import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'
import Button  from '../../components/Button/index'
import TopBackground from '../../components/TopBackground/index'

import {
  Container,
  Form,
  Title,
  ContainerInputs,
  Input,
  Inputlabel
} from './styled'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function resgisterNewUser() {
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

    navigate('/lista-de-usuarios')
  }


  return (
    <Container>

    <TopBackground/>

      <Form>
        <Title>Cadastrar Usuário </Title>
        <ContainerInputs>

          <div>
            <Inputlabel htmlFor='name'>
              Nome<span> *</span>
            </Inputlabel>
            <Input id='name' type="text" placeholder='Nome do usuário' ref={inputName} />
          </div>

          <div>
            <Inputlabel htmlFor='age'>
              Idade<span> *</span>
            </Inputlabel>
            <Input id='age' type="number" placeholder='Idade do usuário' ref={inputAge} />
          </div>

        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <Inputlabel htmlFor='email' >
            E-mail<span> *</span>
          </Inputlabel>
          <Input id='email' type='email' placeholder='E-mail do usuário' ref={inputEmail} />
        </div>

        <Button type='button' onClick={resgisterNewUser} theme='primary'>
          Cadastrar Usuário
        </Button>
      </Form>

      <Button type='button' onClick={()=> navigate('/lista-de-usuarios')}>
          Lista De Usuários
        </Button>

    </Container>
  )
}

export default Home
