import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

type Props = {
    show: boolean,
    children: ReactNode
    step?: number
}

const AnimationMount = styled.div`
    transform: translateX(-500%);
    transition: 1200ms;
    opacity: 1;
    &.unmount
    {
        z-index: -1;
        transform: translateX(-500%);
        position: absolute;
        opacity: 0;
    }
    &.mount
    {
        width: 100%;
        transform: translateX(0%);
        opacity: 1;
    }
    &.mount.mount-fullwidth
    {
        width: 100%;
    }
`

const AnimationStep = ( { children , show  , step } : Props ) => {

    return (
    <AnimationMount className={`${show ? "mount" : "unmount"} ${ ( step! > 0 && step ) ? "mount-fullwidth" : ""}`}>
        { children }
    </AnimationMount>
  )
}

export default AnimationStep