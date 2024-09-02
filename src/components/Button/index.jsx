import {Button} from './styles'
import proptypes from 'prop-types'


const defaultButton = ({children, theme, ...props}) => {
    
    return(
        <Button {...props} theme={theme}>{children}</Button>
    )
}

defaultButton.proptypes = {
    children: proptypes.node.isRequired,
    theme: proptypes.string
}

export default defaultButton
