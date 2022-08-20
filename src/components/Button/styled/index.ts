import type { PropsColors, PropsSizes, PropsTypesButton } from "../../../../types";
import type { Props } from "../types";
import styled from "@emotion/styled";

const backgrounds : PropsTypesButton = {
    primary: '#6633EB',
    secondary: '#6633EB',
    transparent: "rgba( 255 , 255 , 255 , .3)"
}

const colors : PropsColors = {
    black: '#000',
    gray: '#6633EB',
    main: '#6633EB',
    white: "rgb( 255 , 255 , 255 )"
}

const borders : PropsTypesButton = {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    transparent: "transparent"
}

const paddings : PropsSizes = {
   "is-hero": "",
   "is-large": "3.5rem",
   "is-medium": "3.5rem",
   "is-normal": "1.5rem",
   "is-price": "3.5rem",
   "is-small": ""
}

const fontSizesResponsive : PropsSizes = {
   "is-hero": "",
   "is-large": "1.5rem",
   "is-medium": "",
   "is-normal": "1.50rem",
   "is-price": "",
   "is-small": ""
}

export const ButtonStyled = styled.div`
    padding-left: ${ ( props : Props ) => paddings[props.size] };
    padding-right: ${ ( props : Props ) => paddings[props.size] };
    letter-spacing: 1px;
    box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
    -webkit-box-shadow: 8px 10px 30px -4px rgb(0 0 0 / 10%);
    -moz-box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
    background: ${ ( props : Props ) => backgrounds[props.type] || '#000000' };
    border: 0px solid ${ ( props : Props ) => borders[props.type] || '#000000' };
    color: ${ ( props : Props ) => colors[props.color!] || '#000000' };
    &:hover
    {
        color: ${ ( props : Props ) => colors[props.color!] || '#000000' };
    }
    @media screen and (max-width: 480px){
        font-size: ${ ( props : Props ) => fontSizesResponsive[props.size] || fontSizesResponsive['is-normal'] } !important;
    }
`