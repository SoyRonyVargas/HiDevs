import { ParagraphStyled } from './styled'
import type { Props } from './types'
import React from 'react'

const Paragraph = (props: Props) => {

    const {
        children,
        className,
        size
    } = props

    const classStyled = {
        
    }

    return (
        <ParagraphStyled className={`${size} ${className}`} {...props}>
            { children }
        </ParagraphStyled>
    )
}

export default Paragraph
