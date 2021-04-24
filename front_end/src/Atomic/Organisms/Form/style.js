import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: ${props => props.color};
    width: 500px;
    box-shadow: 0 0 10px 1px black;
    border-radius: 5px;
    padding: 10px;
`;

export default Container;