import Background from './components/Background'
import { SectionStyled } from './styled'
import type { Props } from './types'
import React , { FC } from 'react'

const Section : FC<Props> = ( props ) => {
  
    const {
        has_container = true,
        background = null,
        children,
    } = props

    return (
    <SectionStyled {...props}>
        {
            background &&
            <Background
                background={background}
            />
        }
        {
            has_container
            ?
            <div className='container'>
                { children }
            </div>
            :
            <>
                { children }
            </>
        }
    </SectionStyled>
  )
}

export default Section
