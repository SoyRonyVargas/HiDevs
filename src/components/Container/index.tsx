import { WrapperContainer } from './styled'
import React, { FC } from 'react'

type Props = {
    children : React.ReactNode
    extraClassName?: string
}

const Container : FC<Props> = ({ children , extraClassName = "" }) => {
  return (
    <WrapperContainer className={`container ${extraClassName}`}>
      { children }
    </WrapperContainer>
  )
}

export default Container
