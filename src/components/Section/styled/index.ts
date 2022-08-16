import { Props, PropsSpacing } from "../types"
import styled from "@emotion/styled"

export const spacing : PropsSpacing = {
    big: '80px'
}

export const SectionStyled = styled.section<Props>`
    padding-bottom: ${ props => spacing[props.spacing]  };
    padding-top: ${ props => spacing[props.spacing] };
`