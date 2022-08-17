import { StaticImageNullty } from '../../../../types'
import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

export const BackgroundContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const BackgroundStyled = styled(Image)`

`

const Background = ({ background }: { background: StaticImageNullty }) => {

    return (
        <BackgroundContainer>
            <BackgroundStyled
                layout='fill'
                objectFit='cover'
                src={background}
                quality={100}
            />
        </BackgroundContainer>
    )
}

export default Background
