import useClassName from 'hooks/useClassName'
import { TitleH2Styled } from './styled'
import type { Props } from './types'
import React from 'react'

const Title = ( props : Props ) => {
    
    const { title, type } = props
    
    const memoizedClassName = useClassName( props , "" )

    // const titles = {
    //     h1: TitleH2Styled,
    //     h2: TitleH2Styled,
    //     h3: TitleH2Styled,
    //     h4: TitleH2Styled
    // }

    // const TitleSelected = titles[type]

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
