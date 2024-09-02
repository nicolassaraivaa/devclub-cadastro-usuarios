import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'

import Title from '../../components/Title/index'
import Button from '../../components/Button/index'
import TopBackground from '../../components/TopBackground/index'
import Trash from '../../assets/trash.svg'

import {
    Container,
    ContainerUsers,
    CardUsers,
    AvatarUser,
    TrashIcon
} from './styles'

function ListUsers() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => { // Para usarmo async precisamos criar uma função pois não da pra usar diretamente no useEffect
        // TODA vez que a tela é carregada ou uma variavel do UseState   MUDA, o useEffect é chamado

        const getUsers = async () => {
            const { data } = await api.get('/usuarios') //colocando a const dentro de {} estou desestruturando para obter somente oq tem dentro de data

            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const uptadeSetUsers = users.filter(user => user.id !== id) //vai filtrar todos os user.id diferente do {id} clicado

        setUsers(uptadeSetUsers)
    }

    return (
        <Container>
            <TopBackground />

            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt='icone-lixo' onClick={() => deleteUsers(user.id)} />
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button" theme="primary" onClick={() => navigate('/')}>Voltar</Button>

        </Container>
    )

}



export default ListUsers