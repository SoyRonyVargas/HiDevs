import useClassName from './hooks/useClassName'
import { ButtonStyled } from './styled'
import type { Props } from './types'
import React from 'react'

const Button = (props: Props) => {
    
    const { title } = props
    
    const classNameMemoized = useClassName(props)

    console.log('classNameMemoized');
    console.log(classNameMemoized);

    return (
        <ButtonStyled className={classNameMemoized} {...props}>
            {
                title
            }
        </ButtonStyled>

    )
}

export default Button
