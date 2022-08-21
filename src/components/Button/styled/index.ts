import type { PropsColors, PropsSizes, PropsTypesButton, TypesButton } from "../../../../types";
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

type PropsButton = Props & {
    
}

// export const ButtonStyled = styled.button`
//     padding-left: ${ ( props : Props ) => paddings[props.size] };
//     padding-right: ${ ( props : Props ) => paddings[props.size] };
//     letter-spacing: 1px;
//     box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
//     -webkit-box-shadow: 8px 10px 30px -4px rgb(0 0 0 / 10%);
//     -moz-box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
//     background: ${ ( props : PropsButton ) => backgrounds[props.type_button] || '#000000' };
//     border: 0px solid ${ ( props : PropsButton ) => borders[props.type_button] || '#000000' };
//     color: ${ ( props : Props ) => colors[props.color!] || '#000000' };
//     &:hover
//     {
//         color: ${ ( props : Props ) => colors[props.color!] || '#000000' };
//     }
//     @media screen and (max-width: 480px){
//         font-size: ${ ( props : Props ) => fontSizesResponsive[props.size] || fontSizesResponsive['is-normal'] } !important;
//     }
// `

export const ButtonStyled = styled("button")<PropsButton>( ({ size , type_button , color }) => ({
    paddingLeft: paddings[size!],
    paddingRight: paddings[size!],
    letterSpacing: '1px',
    boxShadow: '8px 10px 30px -4px rgba(0,0,0,0.10)',
    background: backgrounds[type_button!] || '#000000',
    border: `0px solid ${ borders[type_button!] || '#000000' }`,
    color: colors[color!] || colors['white'],
    outline: 'none !important',
    "&:hover": {
        color: colors[color!] || colors['white']
    },
    ":hover": {
        color: colors[color!] || colors['white']
    },
    ":active": {
        color: colors[color!] || colors['white']
    },
    "&:active": {
        color: colors[color!] || colors['white']
    },
    "&:focus": {
        color: colors[color!] || colors['white']
    },
    "@media screen and (max-width: 480px)": {
        fontSize: `${fontSizesResponsive[size!] || fontSizesResponsive['is-normal']} !important`
    }
    // box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
    // -webkit-box-shadow: 8px 10px 30px -4px rgb(0 0 0 / 10%);
    // -moz-box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
    //
    // color: ${ ( props : Props ) => colors[props.color!] || '#000000' };
    // &:hover
    // {
    //     color: ${ ( props : Props ) => colors[props.color!] || '#000000' };
    // }
    // @media screen and (max-width: 480px){
    //     
    // }
}))
