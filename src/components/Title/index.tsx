import useClassName from 'hooks/useClassName'
import { TitleH2Styled } from './styled'
import type { Props } from './types'
import React from 'react'

const Title = ( props : Props ) => {
    
    const { title } = props
    
    const memoizedClassName = useClassName( props , "" )

    return (
        <TitleH2Styled 
            {...props}
            className={memoizedClassName} 
        >
            { title }
        </TitleH2Styled>
    )
}

export default Title
