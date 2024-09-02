import { TopBackground } from './styles'
import UsersImage from '../../assets/users.png'


function defaultTopBackground(){
    return(
        <TopBackground>
            <img src={UsersImage} alt='imagem usuario' />
        </TopBackground>
    )
}

export default defaultTopBackground