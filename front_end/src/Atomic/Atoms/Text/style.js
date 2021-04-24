import styled from 'styled-components';

const TextStyle = styled.p`
    color:          ${props => props.color};
    font-size:      ${props => props.fontSize};
    letter-spacing: ${props => props.spacing};
    margin:         ${props => props.margin};
    text-align:     ${props => props.align};
`

export default TextStyle;