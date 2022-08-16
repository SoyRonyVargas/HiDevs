import styled from "@emotion/styled";
import Image from "next/image";

export const HeroContainer = styled.div`
    position: relative;
    height: 100vh;
    /* background-color: red; */

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