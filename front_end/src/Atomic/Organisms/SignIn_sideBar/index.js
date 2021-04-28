import React from 'react';
import Text from '../../Atoms/Text';
import Title from '../../Atoms/Title';
import Container, {TitleContainer} from './style';
import Bold from '../../Atoms/Bold/style';
import {FaBug} from 'react-icons/fa';

function SideBar(props){
    return(
        <Container>
            <TitleContainer>
                <FaBug color="red" fontSize="3rem"/>
                <Title type='main' color='white'><Bold>Bugpédia</Bold></Title>
            </TitleContainer>
            <Title type='subsub' color='white'><Bold>Bug Tracker</Bold></Title>
            <Text color='white' >Mantenha os bugs do seu sistema ao seu controle e permita a seus desenvolvedores que os corrijam.</Text>

            <Title type='subsub' color='white'><Bold>Controle de equipe</Bold></Title>
            <Text color='white'>Adicione desenvolvedores para o seu projeto, desta forma o time de desenvolvimento terá uma forma clara e objetiva de quais bugs terão de resolver.</Text>

            <Title type='subsub' color='white'><Bold>Tabela Kanban</Bold></Title>
            <Text color='white'>Tenha através da tablea Kanban uma descrição visual e clara das atividades que precisam serem feitas</Text>
        </Container>
    )
}

export default SideBar;