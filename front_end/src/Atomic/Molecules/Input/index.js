import {Input as InputAtom} from '../../Atoms/Input';
import Text from '../../Atoms/Text';
import {Container} from './style';

function Input(props){
    return(
        <Container>
            <InputAtom>{props.name}</InputAtom>
            <Text
                color ="red"
                fontSize = ".75rem"
                margin = '.25rem 0 .25rem .5rem'
            >
                {props.error}
            </Text>
        </Container>
    )
}

export default Input;
