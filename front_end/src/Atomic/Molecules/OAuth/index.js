import React from 'react';
import { OAuth as OAuthAtom } from '../../Atoms/OAuth';
import Text from '../../Atoms/Text';
import { Container } from './style';

function OAuth(props){
    return(
        <Container>
            <Text
                align = 'center'
            >
                {props.text}
            </Text>
            <OAuthAtom type = 'github' />
            <OAuthAtom type = 'facebook' />
            <OAuthAtom type = 'google' />
        </Container>
    )
}

OAuth.defaultProps = {
    text: 'Texto',
}

export default OAuth;