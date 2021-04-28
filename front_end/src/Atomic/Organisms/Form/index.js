import React from 'react';
import Input from '../../Molecules/Input';
import OAuthMolecule from '../../Molecules/OAuthMolecule';
import Button from '../../Atoms/Button';
import Bold from '../../Atoms/Bold/style';
import Title from '../../Atoms/Title';
import Text from '../../Atoms/Text';
import Container from './style';

function Form(){
    return(
        <Container
            type = 'card'
            ctnWidth = '400px'
        >
            <Title type ='main'><Bold>Cadastre-se</Bold></Title>
            <Input 
                name = 'Nome'
                error = 'Nome já cadastrado'
            />
            <Input 
                name = 'Email'
                error = 'Email Inválido'
            />
            <Input 
                name = 'Senha'
                error = 'Senha inválida'
            />
            <Input 
                name = 'Confirmar a senha'
                error = 'Senhas diferentes'
            />
            <Text
                fontSize = '0.75em'
                align  = 'center'
            >
                Ao concluir o cadastro você aceita os nossos <Bold>Termos e condições</Bold>
            </Text>
            <Button>Cadastrar</Button>
            <Text
                align  = 'center'
            >
                Você pode também se <Bold>cadastrar</Bold> usando uma de suas contas abaixo!
            </Text>
            <OAuthMolecule />
        </Container>
    )
}

export default Form;