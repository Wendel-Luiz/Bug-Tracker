import styled from 'styled-components';

const ButtonStyle = styled.button`
    color: white;
    background-color: #121849;
    border: 2px solid #121849;
    border-radius: 0.3rem;
    padding: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: white;
        color: #121849;
    }
`

export default ButtonStyle;