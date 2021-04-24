import Input from '../../Atoms/Input';
import Text from '../../Atoms/Text';
import {Container} from './style';

export default (props) => (
    <Container>
        <Input>{props.name}</Input>
        <Text
            color ="red"
            fontSize = ".75rem"
            margin = '.25rem 0 .25rem .5rem'
        >
            {props.error}
        </Text>
    </Container>
)