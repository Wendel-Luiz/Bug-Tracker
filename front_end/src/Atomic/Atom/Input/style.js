import styled from 'styled-components';

const InputStyle = styled.input`
    background-color: #121849;
    color: white;
    font-weight: bold;
    border: 2px solid #121849;
    border-radius: 0.3rem;
    padding: .5rem;

    &::placeholder{
        color: white;
    }

    &:focus{
        color: #121849;
        background-color: white;
    }
`
export default InputStyle;
