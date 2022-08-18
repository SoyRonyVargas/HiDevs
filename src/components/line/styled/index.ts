import { Props, PropsWidths } from "../types"
import styled from "@emotion/styled"

const widths : PropsWidths = {
    full: "100%",
    small: '150px'
}

const heights : PropsWidths = {
    full: "8px",
    small: '2px'
}

export const LineStyled = styled('div')<Props>( props => ({
    borderRadius: '100px',
    width: widths[props.width!] || widths['full'],
    height: heights[props.height!] || widths['full'],
    background: "var(--color-primary)",
    marginLeft: "auto",
    marginRight: "auto",
}))