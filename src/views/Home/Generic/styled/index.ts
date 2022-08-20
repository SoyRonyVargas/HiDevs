import styled from "@emotion/styled";

export const ContainerMainImage = styled.div`
    position: relative;
    margin: 0 auto;
    min-height: 1000px;
    min-width: 300px;
    @media screen and (max-width: 480px){
        min-height: 400px;
        max-width: 280px;
        min-width: 100%;
    }
`