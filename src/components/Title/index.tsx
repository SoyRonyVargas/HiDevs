import useClassName from 'hooks/useClassName'
import { TitleStyled } from './styled'
import type { Props } from './types'
import React from 'react'

const Title = ( props : Props ) => {
    
    const { title } = props
    
    const memoizedClassName = useClassName( props , "" )

    return (
        <TitleStyled 
            {...props}
            className={memoizedClassName} 
        >
            { title }
        </TitleStyled>
    )
}

export default Title
