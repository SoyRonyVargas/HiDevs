import { PropsColors, PropsSizes } from "../../../../types";
import styled from "@emotion/styled";
import { Props } from "../types";

const colors : PropsColors = {
    white : '#FFFFFF' ,
    black: '#000000',
    gray: 'gray',
    main: ''
}

const sizes : PropsSizes = {
    'is-hero': '',
    'is-normal' : '1.25rem' ,
    'is-medium' : '1.50rem' ,
    'is-large': '1',
    "is-small": '0.875rem',
    "is-price": ""
}

export const ParagraphStyled = styled.p<Props>`
    color: ${ props => colors[props.color!] };
    font-size: ${ props => sizes[props.size!] };
    line-height: 2;
`