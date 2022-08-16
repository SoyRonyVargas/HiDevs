import styled from "@emotion/styled";
import { Props } from "../types";

const colors = {
    'white' : '#FFFFFF' ,
    'gray': 'gray' ,
    'big': '#000'
}

const sizes = {
    'is-normal' : '1.25rem' ,
    'is-medium' : '1.50rem' ,
}

export const ParagraphStyled = styled.p<Props>`
    color: ${ props => colors[props.color] };
    font-size: ${ props => sizes[props.size] };
`