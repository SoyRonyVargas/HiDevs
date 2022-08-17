import { PropsSizes } from "../../../../types"
import styled from "@emotion/styled"
import { Props } from "../types"

export const spacing : PropsSizes = {
    "is-small": '5rem',
    "is-normal": '1rem',
    "is-medium": '1.5rem',
    "is-hero": "",
    "is-large": "5rem"
}

export const SectionStyled = styled.section<Props>`
    padding-bottom: ${ props => spacing[props.spacing!] };
    padding-top: ${ props => spacing[props.spacing!] };
    position: relative;
`