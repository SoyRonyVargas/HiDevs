import { ButtonStyled } from './styled'
import type { Props } from './types'
import React from 'react'

const Button = ( props : Props ) => {
  
    const {
        className,
        title,
        size
    } = props

    return (
    <ButtonStyled className={`button ${ size } `} {...props}>
        {
            title
        }
    </ButtonStyled>

  )
}

export default Button
