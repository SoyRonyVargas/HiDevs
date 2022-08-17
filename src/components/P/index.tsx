import useClassName from 'hooks/useClassName'
import { ParagraphStyled } from './styled'
import type { Props } from './types'
import React from 'react'

const Paragraph = (props: Props) => {

    const { children } = props

    const memoizedClassName = useClassName( props )

    return (
        <ParagraphStyled 
            // CUIDADO AL COLOCAR AL INVERSO
            // LAS PROPS PORQUE SE SOBRE ESCRIBE
            // EL CLASSNAME
            {...props}
            className={memoizedClassName} 
        >
            { children }
        </ParagraphStyled>
    )
}

export default Paragraph
