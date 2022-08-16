import { SectionStyled } from './styled'
import type { Props } from './types'
import React from 'react'

const Section = ( props : Props ) => {
  
    const {
        has_container = true,
        children
    } = props

    return (
    <SectionStyled {...props}>
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
