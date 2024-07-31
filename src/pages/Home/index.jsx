import { useRef } from 'react'
import api from '../../services/api'

import {
  Container,
  TopBackground,
  Form,
  Title, 
  ContainerInputs, 
  Input, 
  Button,
  Inputlabel
} from './styled'

import UsersImage from '../../assets/users.png'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function resgisterNewUser() {
    console.log('opaa cliquei')
    const data = await api.post('/usuarios',{
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
      })

      console.log(data)
  }


  return (
    <Container> 
        <TopBackground>
          <img src={UsersImage} alt='imagem usuario'/> 
        </TopBackground>

        <Form>
          <Title>Cadastrar Usuários</Title>
          <ContainerInputs> 
              <div>
                <Inputlabel htmlFor='name'>
                  Nome<span> *</span>
                </Inputlabel>
                <Input id='name' type="text" placeholder='Nome do usuário' ref={inputName}/>
              </div>
              <div>
                <Inputlabel htmlFor='age'>
                  Idade<span> *</span>
                </Inputlabel>
                <Input id='age' type="number" placeholder='Idade do usuário' ref={inputAge}/>
              </div>
            </ContainerInputs>

            <div style={{width:'100%'}}>
              <Inputlabel htmlFor='email' >
                E-mail<span> *</span>
              </Inputlabel>
              <Input id='email' type='email' placeholder='E-mail do usuário' ref={inputEmail}/>
            </div>

          <Button onClick={resgisterNewUser}>Cadastrar Usuário</Button>
        </Form>

    </Container>
  )
}

export default Home
