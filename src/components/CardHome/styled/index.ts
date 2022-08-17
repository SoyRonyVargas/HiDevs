import type { Props } from "../types";
import styled from "@emotion/styled";

// export const CardHomeStyled = styled("article")<Props>( props => ({
//     background: props.bg_color || ''
// }))

export const CardHomeStyled = styled.article<Props>`
    background: ${ props => props.bg_color };
    border-radius: 8px;
    min-height: 500px;
    max-height: 500px;
    max-width: 380px;
    margin: 0 auto;
`