import { PropsColors , PropsSizes , PropsWeight } from "../../../../types";
import type { Props } from "../types";
import styled from "@emotion/styled";

const fontSizes : PropsSizes = {
    'is-hero': '70px',
    'is-large': '50px',
    'is-medium':  '30px',
    'is-normal': '1.4rem',
    'is-small': '1.2rem',
    'is-price': '2.2rem'
}

const colors : PropsColors = {
    white: "#FFFFFF",
    gray: "#909090",
    black: "#000000",
    main: "#6633EB"
}

const fonts: PropsWeight = {
    normal: "PublicaSans",
    bold: "PublicaSansBold"
}

export const TitleStyled = styled("h2")<Props>( props => ({
    fontFamily: fonts[props.weight!] || fonts['normal'],
    fontSize: fontSizes[props.size!],
    color: colors[props.color!] || colors['black'],
    fontWeight: props.size === 'is-hero' ? "normal" : 700,
    lineHeight: 1,
})) 

export const TitleH2Styled = styled(TitleStyled)<Props>( props => ({
    
})) 