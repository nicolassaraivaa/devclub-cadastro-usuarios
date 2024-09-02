import {Title} from './styles'
import propTypes from 'prop-types'

const DefaultTitle = ({children,theme}) =>{

    return(
        <Title theme={theme}>{children}</Title>
    )
}

DefaultTitle.propTypes ={
    children: propTypes.node.isRequired,
    theme: propTypes.string

}

export default DefaultTitle