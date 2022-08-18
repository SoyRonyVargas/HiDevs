import { PropsTypesButton } from "../../../../types";
import { Props , PropsPosition } from "../types";
import styled from "@emotion/styled";

const positions : PropsPosition = {
    normal: 'absolute',
    static: 'relative',
}

const backgrounds : PropsTypesButton = {
    primary: 'var(--color-primary)',
    transparent: "transparent",
    secondary: 'trasparent'
}

export const NavbarStyled = styled.nav<Props>`
    position: ${ props => positions[props.typed] || positions['normal' ]};
    background: ${ props => backgrounds[props.color] || backgrounds['primary']};
    transition: 500ms;
    margin: 0 auto;
    padding: 15px;
    z-index: 10;
    right: 0;
    left: 0;
    & > .container
    {
        justify-content: space-between;
        align-items: center;
        display: flex;
    }
    & a
    {
        font-weight: 600;
        color: #FFFFFF;
        letter-spacing: 1px;
    }
    @media screen and ( max-width: 768px ){
        background-color: ${ props => backgrounds['primary'] };
        padding: 10px;
        position: sticky;
        top: 0;
        &.navbar--shadow
        {
            box-shadow: 1px 4px 13px 6px rgba(0,0,0,0.17);
            -webkit-box-shadow: 1px 4px 13px 6px rgba(0,0,0,0.17);
            -moz-box-shadow: 1px 4px 13px 6px rgba(0,0,0,0.17);
        }
        & > .container
        {
            max-width: 100%;
            width: 100%;
            margin: 0;
        }
    }
`

export const ContainerSideStyled = styled.div`
    align-items: inherit;
    display: inherit;
    & > .anchors__login
    {
    }
`

export const ContainerSideButtonsStyled = styled(ContainerSideStyled)`
    .container__buttons--desktop
    {
        align-items: inherit;
        display: inherit;
    }
    .container__buttons--mobile
    {
        display: none;
    }
    @media screen and ( max-width: 1024px ){
        & .container__buttons--desktop
        {
            display: none;
        }
        & .container__buttons--mobile
        {
            display: block;
        }
    }
`

export const ContainerLogoStyled = styled.div`
    position: relative;
    height: 43px;
    width: 70px;
    @media screen and ( max-width: 768px ){
        transform: scale(.7);
    }
`

export const ListNav = styled.ul`
    margin-left: .50rem;
    display: inherit;
    @media screen and ( max-width: 1215px ){
        display: none;
    }
`

export const ListItem = styled.li`
    margin-left: 4rem;
`

export const DividerStyled = styled.div`
    transform: rotate(90deg);
    background-color: #ddd;
    width: 1.50rem;
    height: 1px;
    opacity: .5;
`

export const NavToggleStyled = styled.div`
    background: transparent;
    place-items: center;
    display: grid;
    height: 60px;
    width: 60px;
    border: 0;
    & > i
    {
        font-size: 2.5rem;
        color: #FFF;
    }
`