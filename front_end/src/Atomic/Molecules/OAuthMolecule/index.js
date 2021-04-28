import React from 'react';
import OAuth from '../OAuth';
import Container from './style';


function OAuthMolecule(props){
    return(
        <Container>
            <OAuth type='github'/>
            <OAuth type='facebook'/>
            <OAuth type='google'/>
        </Container>
    )
}

export default OAuthMolecule;