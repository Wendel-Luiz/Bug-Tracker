import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    background-color:blue;
    width: 350px;
    padding:20px;
    border-radius:5px;
    box-shadow: 0 0 20px 1px black;
`;

const TitleContainer = styled.div`
    display:flex;
    align-items:center;

    h1{
        margin-left:1em;
    }
`;

export default Container;

export{
    TitleContainer
}