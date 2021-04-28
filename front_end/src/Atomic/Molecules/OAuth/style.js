import { Link } from "react-router-dom";
import styled from 'styled-components';

const OAuthLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: 500;
    padding-left: .5rem;
`

const Container = styled.div`
    display:flex;
    justify-content:center;
    padding:.25rem;
    border-radius:5px;
    background-color: ${props => props.color}
`;

export {
    OAuthLink,
    Container
};