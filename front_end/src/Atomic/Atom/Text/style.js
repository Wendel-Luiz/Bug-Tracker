import styled from 'styled-components';

const TextStyle = styled.p`
    color: ${props => props.color ? props.color : 'black'};
    font-size: ${props => props.fontSize ? props.fontSize : '1rem'};
    letter-spacing: ${props => props.spacing ? props.spacing : 'normal'};
`

export default TextStyle;