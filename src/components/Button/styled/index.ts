import type { PropsTypesButton } from "../../../../types";
import type { Props } from "../types";
import styled from "@emotion/styled";

const backgrounds : PropsTypesButton = {
    primary: '#6633EB',
    secondary: '#6633EB',
    transparent: "rgba( 255 , 255 , 255 , .3)"
}

const colors : PropsTypesButton = {
    primary: '#FFFFFF',
    secondary: '#6633EB',
    transparent: "rgb( 255 , 255 , 255 )"
}


export const ButtonStyled = styled.div`
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    /* font-weight: bold; */
    letter-spacing: 1px;
    box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
    -webkit-box-shadow: 8px 10px 30px -4px rgb(0 0 0 / 10%);
    -moz-box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
    background: ${ ( props : Props ) => backgrounds[props.type] || '#000000' };
    border: 1px solid ${ ( props : Props ) => backgrounds[props.type] || '#000000' };
    color: ${ ( props : Props ) => colors[props.type] || '#000000' };
    /* border: 0 ; */
    &:hover
    {
        color: ${ ( props : Props ) => colors[props.type] || '#000000' };
    }
`