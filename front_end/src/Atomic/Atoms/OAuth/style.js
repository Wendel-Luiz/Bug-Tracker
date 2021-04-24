import { Link } from "react-router-dom";
import styled from 'styled-components';

const OAuthLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: 500;
    padding-left: .5rem;
`

const OAuthContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;

    padding: 0.5rem;

    width:              ${props => props.cntWidht   || "auto"};
    background-color:   ${props => props.color};
    
    border-radius: 0.15rem;
`

export {
    OAuthLink,
    OAuthContainer,
};