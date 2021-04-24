import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:stretch;
    width:100%;

    & div{
        margin-bottom:.25rem;
    }

    & > :last-child{
        margin-bottom: 0;
    }
`

export {
    Container
}