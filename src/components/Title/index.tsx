import { TitleH2Styled } from './styled'
import type { Props } from './types'
import React from 'react'

const Title = ( props : Props ) => {
    
    const {
        title,
        type,
        aling
    } = props

    const titles = {
        h1: TitleH2Styled,
        h2: TitleH2Styled,
        h3: TitleH2Styled,
        h4: TitleH2Styled
    }

    const TitleSelected = titles[type]

    const getClass = () : string => {

        let classGen = ''

        if( aling )
        {
            classGen += aling + " "
        }

        return classGen

    }

    return (
        <TitleSelected className={getClass()} {...props}>
            { title }
        </TitleSelected>
    )
}

export default Title
