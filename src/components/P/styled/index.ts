import styled from "@emotion/styled";
import { PropsColors, PropsSizes } from "../../../../types";
import { Props } from "../types";

const colors : PropsColors = {
    white : '#FFFFFF' ,
    black: '#000000',
    gray: 'gray',
}

const sizes : PropsSizes = {
    'is-hero': '',
    'is-normal' : '1.25rem' ,
    'is-medium' : '1.50rem' ,
    'is-large': '1',
    "is-small": '2',
}

export const ParagraphStyled = styled.p<Props>`
    color: ${ props => colors[props.color!] };
    font-size: ${ props => sizes[props.size!] };
    line-height: 2;
`