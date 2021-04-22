import styled from 'styled-components';

const OAuthStyle = styled.button`
    background-color: ${
        props => props.color
    };

    border: 2px solid ${
        props => props.color
    };

    color: white;
    border-radius: 0.3rem;
    font-weight: bold;
    padding: .25rem;
    width: 5rem;
    cursor: pointer;
`

export default OAuthStyle;