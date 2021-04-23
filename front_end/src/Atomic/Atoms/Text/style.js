import styled from 'styled-components';

const TextStyle = styled.p`
    color: ${props => props.color || 'black'};
    font-size: ${props => props.fontSize || '1rem'};
    letter-spacing: ${props => props.spacing || 'normal'};
`

export default TextStyle;