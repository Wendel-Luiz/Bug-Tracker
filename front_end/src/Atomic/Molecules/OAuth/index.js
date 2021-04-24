import React from 'react';
import OAuth from '../../Atoms/OAuth';
import Text from '../../Atoms/Text';
import Bold from '../../Atoms/Bold/style';
import { Container } from './style';

export default (props) => (
    <Container>
        <Text
            align = 'center'
        >
            Possui conta em algum dos sites abaixo? <Bold>Cadastre-se</Bold> com ela!
        </Text>
        <OAuth type = 'github' />
        <OAuth type = 'facebook' />
        <OAuth type = 'google' />
    </Container>
)