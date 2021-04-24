import React from 'react';
import Input from '../../Molecules/Input';
import OAuth from '../../Molecules/OAuth';
import Button from '../../Atoms/Button';
import Bold from '../../Atoms/Bold/style';
import Title from '../../Atoms/Title';
import Text from '../../Atoms/Text';
import Container from './style';

function Form(){
    return(
        <Container
            color = 'white'
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
            <OAuth />

        </Container>
    )
}

export default Form;