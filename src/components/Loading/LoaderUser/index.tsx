import { LoaderContainerStyled, LoaderIcon } from './styled'
import React from 'react'

const LoadingUser = ( { className } : { className: string }) => {
  return (
    <LoaderContainerStyled className={className}>
        <LoaderIcon>
            <div/>
            <div/>
            <div/>
        </LoaderIcon>
    </LoaderContainerStyled>
  )
}

export default LoadingUser