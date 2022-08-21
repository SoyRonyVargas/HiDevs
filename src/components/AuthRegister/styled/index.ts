import styled from "@emotion/styled";

export const ContainerView = styled.section`
    background-color: #fefefe;
    min-height: 100vh;
    transition: 500ms;
    display: flex;
    width: 100vw;
`

export const ContainerMainImage = styled.div`
    width: 650px;
    height: 650px;
    margin: 0 auto;
`

export const ContainerChildrens = styled.div`
    flex-direction: column;
    width: 55%; 
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1024px)
    {
        width: 85%;
    }
`