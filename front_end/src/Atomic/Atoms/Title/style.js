import styled from 'styled-components';

const TitleMainStyle = styled.h1`
    color: ${props => props.color || 'black'};
`

const TitleSubStyle = styled.h2`
    color: ${props => props.color || 'black'};
`

const TitleSubSubStyle = styled.h3`
    color: ${props => props.color || 'black'};
`

export {
    TitleMainStyle, 
    TitleSubStyle, 
    TitleSubSubStyle
};