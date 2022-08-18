import useClassName from 'hooks/useClassName'
import { LineStyled } from './styled'
import { Props } from './types'
import React from 'react'

const Line = (props: Props) => {

    const memoizedClassName = useClassName( props )

    return <LineStyled className={memoizedClassName} {...props}/>

}

export default Line
