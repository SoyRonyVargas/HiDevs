import { PropsColors , PropsSizes } from "../../../../types";
import type { Props, PropsColorsHeadings } from "../types";
import styled from "@emotion/styled";

const fontSizes : PropsSizes = {
    'is-hero': '70px',
    'is-large': '50px',
    'is-medium':  '30px',
    'is-normal': '20px',
    'is-small': '10px'
}

const colors : PropsColors = {
    white: "#FFFFFF",
    gray: "#909090",
    black: "#000000"
}

export const TitleStyled = styled("h2")<Props>( props => ({
    fontSize: fontSizes[props.size!],
    color: colors[props.color!] || colors['black']
})) 

export const TitleH2Styled = styled(TitleStyled)<Props>( props => ({

})) 