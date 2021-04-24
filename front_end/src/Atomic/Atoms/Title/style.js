import styled from 'styled-components';

const TitleMainStyle = styled.h1`
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    color: ${props => props.color || 'black'};
`

const TitleSubStyle = styled.h2`
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    color: ${props => props.color || 'black'};
`

const TitleSubSubStyle = styled.h3`
    margin-top: 1em;
    margin-bottom: 1em;
    color: ${props => props.color || 'black'};
`

export {
    TitleMainStyle, 
    TitleSubStyle, 
    TitleSubSubStyle
};