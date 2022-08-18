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
    'is-large': '1',
    'is-medium' : '1.50rem' ,
    'is-normal' : '1.1rem' ,
    "is-small": '0.875rem',
    "is-price": ""
}

const sizesResponsive : PropsSizes = {
    'is-hero': '',
    'is-large': '1',
    'is-medium' : '1.50rem' ,
    'is-normal' : '1.50rem' ,
    "is-small": '1.25rem',
    "is-price": ""
}

export const ParagraphStyled = styled.p<Props>`
    color: ${ props => colors[props.color!] };
    font-size: ${ props => sizes[props.size!] || sizes['is-normal'] };
    line-height: 2;
    @media screen and (max-width: 480px){
        font-size: ${ props => sizesResponsive[props.size!] || sizesResponsive['is-normal'] };;
    }
`