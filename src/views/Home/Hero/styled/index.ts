import styled from "@emotion/styled";
import Image from "next/image";

export const HeroContainer = styled.div`
    position: relative;
    height: 100vh;
    /* background-color: red; */
    @media screen and (max-width: 768px){
        height: auto;
    }
`

export const ContainerMainImageStyled = styled.div`
    place-items: center;
    position: relative;
    display: grid;
    height: 600px;
    width: 600px;
    @media screen and (max-width: 1024px)
    {
        margin: 0 auto;
    }
    @media screen and (max-width: 480px)
    {
        width: 350px;
        height: 350px;
    }
`

export const BackgroundImage = styled(Image)`
    position: absolute;
    height: inherit;
    z-index: -1;
`

export const MainImageStyled = styled(Image)`
    height: 100px;
    width: 100px;
`