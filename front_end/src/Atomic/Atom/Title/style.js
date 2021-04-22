import styled from 'styled-components';

const TitleMainStyle = styled.h1`
    color: ${props => props.color ? props.color : 'black'};
    font-size: ${props => props.size ? props.size : '2em'};
    letter-spacing: ${props => props.spacing ? props.spacing : '2em'};
`