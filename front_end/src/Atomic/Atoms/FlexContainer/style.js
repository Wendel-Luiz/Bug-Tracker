import styled from 'styled-components';

const FlexContainerStyle = styled.div`
    width:              ${props => props.values.ctnWidth};
    height:             ${props => props.values.ctnHeight};

    display: flex;
    flex-direction:     ${props => props.values.flexDirection};
    align-items:        ${props => props.values.alignItems};
    justify-content:    ${props => props.values.justifyContent};

    border:             ${props => props.values.border};
    border-radius:      ${props => props.values.borderRadius};
    box-shadow:         ${props => props.values.boxShadow};
    padding:            ${props => props.values.padding};
    margin:             ${props => props.values.margin};
    background-color:   ${props => props.values.backgroundColor};

`

export default FlexContainerStyle;
