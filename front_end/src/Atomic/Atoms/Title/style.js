import styled from 'styled-components';



const TitleMainStyle = styled.h1`
    margin-top: 1em;
    margin-bottom: 1em;
    text-align: ${props => props.textAlign};
    color: ${props => props.color};
`

const TitleSubStyle = styled.h2`
    margin-top: 0.83em;
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign};
    color: ${props => props.color};
`

const TitleSubSubStyle = styled.h3`
    
    margin-top: 0.67em;
    margin-bottom: ${props => props.marginBottom};
    text-align: ${props => props.textAlign};
    color: ${props => props.color};
`

export {
    TitleMainStyle, 
    TitleSubStyle, 
    TitleSubSubStyle
};