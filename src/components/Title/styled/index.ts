import type { Props, PropsColorsHeadings, PropsSizes } from "../types";
import styled from "@emotion/styled";

const fontSizes : PropsSizes = {
    hero: '70px',
    big: '50px'
}

const colors : PropsColorsHeadings = {
    white: "#FFFFFF",
    gray: "#909090",
    black: "#000000"
}

export const TitleStyled = styled("h2")<Props>( props => ({
    fontSize: fontSizes[props.size],
    color: colors[props.color!] || colors['black']
})) 

export const TitleH2Styled = styled(TitleStyled)<Props>( props => ({
})) 