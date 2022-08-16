import type { Props } from "../types";
import styled from "@emotion/styled";

const backgrounds = {
    primary: '#6633EB',
    secondary: '#6633EB',
    transparent: "rgba( 255 , 255 , 255 , .3)"
}

const colors = {
    primary: '#6633EB',
    secondary: '#6633EB',
    transparent: "rgb( 255 , 255 , 255 )"
}


export const ButtonStyled = styled.div`
    padding-left: 2em;
    padding-right: 2em;
    background: ${ ( props : Props ) => backgrounds[props.type] || '#000000' };
    color: ${ ( props : Props ) => colors[props.type] || '#000000' };
    border: 0 ;
    &:hover
    {
        color: ${ ( props : Props ) => colors[props.type] || '#000000' };
    }
`