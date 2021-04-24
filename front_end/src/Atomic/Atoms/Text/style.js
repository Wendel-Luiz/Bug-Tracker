import styled from 'styled-components';

const TextStyle = styled.p`
    color: ${props => props.color || 'black'};
    font-size: ${props => props.fontSize || '1rem'};
    letter-spacing: ${props => props.spacing || 'normal'};
    margin: ${props => props.margin || '1em 0 1em 0'};
    text-align: ${props => props.align || 'left'};
`

export default TextStyle;