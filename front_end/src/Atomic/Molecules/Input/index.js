import {Input as InputAtom} from '../../Atoms/Input';
import Text from '../../Atoms/Text';
import Container from './style';
import Bold from '../../Atoms/Bold/style'

function Input(props){
    return(
        <Container>
            <InputAtom>{props.name}</InputAtom>
            <Text
                color ="red"
                fontSize = ".75rem"
                margin = '.25rem 0 .25rem .5rem'
            >
                <Bold>{props.error}</Bold>
            </Text>
        </Container>
    )
}

export default Input;
