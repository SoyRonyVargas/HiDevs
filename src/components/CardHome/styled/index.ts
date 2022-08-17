import type { Article } from "../../../../types"
import styled from "@emotion/styled"
import Image from 'next/image'

export const CardHomeStyled = styled.div<any>`
    background: ${ (props : Article ) => props.bg_color };
    border-radius: 15px;
    /* min-height: 500px; */
    max-height: 500px;
    max-width: 380px;
    margin: 0 auto;
    padding: 40px 15px;
    padding-top: 10px;
    padding-bottom: 30px;
    box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
    -webkit-box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
    -moz-box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
    /* border: 1px solid #909090; */
`

export const CardContainImage = styled.div`
    position: relative;
    margin: 0 auto;
    height: 250px;
    width: 250px;
`

export const CardImage = styled(Image)`
    margin: 0 auto;
    display: block;
`